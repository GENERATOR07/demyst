import { NextFunction, Request, Response } from "express";
import { processLoanApplication } from "../services/applicationService";
import { ILoanApplicationRequest } from "../interfaces";
import CustomError from "../utils/customError";
import { validateLoanApplicationRequest } from "../utils/validation";

export const submitLoanApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const applicationData: ILoanApplicationRequest = req.body;

    // Validate the loan application request data using the validation function
    const { error } = validateLoanApplicationRequest(applicationData);

    if (error) {
      // Handle validation errors
      throw new CustomError(error.details[0].message, 400);
    }

    const result = await processLoanApplication(applicationData);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};
