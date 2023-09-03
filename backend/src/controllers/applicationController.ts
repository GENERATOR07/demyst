import { Request, Response } from "express";
import { processLoanApplication } from "../services/applicationService";
import { ILoanApplicationRequest } from "../interfaces";

export const submitLoanApplication = async (req: Request, res: Response) => {
  try {
    const applicationData: ILoanApplicationRequest = req.body;

    if (!applicationData) {
      return res.status(400).json({ error: "Application data is missing" });
    }

    const result = await processLoanApplication(applicationData);
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error processing loan application:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
