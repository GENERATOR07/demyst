import { Request, Response } from "express";
import { getBalanceSheetData } from "../services/balanceSheetService";
import { IBusinessDetails } from "../interfaces";

export const getBalanceSheet = async (req: Request, res: Response) => {
  try {
    const businessDetails: IBusinessDetails = req.body;

    if (
      !businessDetails.business_name ||
      !businessDetails.year_established ||
      !businessDetails.summary ||
      !businessDetails.accounting_provider ||
      !businessDetails.loan_amount
    ) {
      return res.status(400).json({ error: "Incomplete business details" });
    }

    const balanceSheetData = await getBalanceSheetData(businessDetails);
    res.status(200).json(balanceSheetData);
  } catch (error) {
    console.error("Error fetching balance sheet:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
