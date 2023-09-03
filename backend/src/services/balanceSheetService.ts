import { IBusinessDetails } from "../interfaces";
import { getBalanceSheetDataFromApi } from "./accountingApiService";

export const getBalanceSheetData = async (
  businessDetails: IBusinessDetails
) => {
  try {
    const balanceSheetData = await getBalanceSheetDataFromApi(businessDetails);
    return balanceSheetData;
  } catch (error) {
    throw error;
  }
};
