import { IBalanceSheet, IBusinessDetails } from "../interfaces";
import { getBalanceSheetDataFromApi } from "./accountingApiService";

export const getBalanceSheetData = async (
  businessDetails: IBusinessDetails
): Promise<IBalanceSheet[]> => {
  try {
    const balanceSheetData = await getBalanceSheetDataFromApi(businessDetails);
    return balanceSheetData;
  } catch (error) {
    throw error;
  }
};
