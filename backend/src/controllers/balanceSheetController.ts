import { NextFunction, Request, Response } from "express";
import { getBalanceSheetData } from "../services/balanceSheetService";
import { IBusinessDetails } from "../interfaces";
import { validateBusinessDetails } from "../utils/validation";
import CustomError from "../utils/customError";

export const getBalanceSheet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const businessDetails: IBusinessDetails = req.body;

    // Validate the loan application request data using the validation function
    const { error } = validateBusinessDetails(businessDetails);

    if (error) {
      // Handle validation errors
      throw new CustomError(error.details[0].message, 400);
    }
    const balanceSheetData = await getBalanceSheetData(businessDetails);
    res.status(200).json(balanceSheetData);
  } catch (error) {
    next(error);
  }
};
