import axios, { AxiosRequestConfig } from "axios";
import { IBalanceSheet, IBusinessDetails } from "../interfaces";
import { BALANCE_SHEET } from "../Data/balanceSheet";

const ACCOUNTING_API_BASE_URL = "https://.com";
const API_KEY = "your-api-key";

const api = axios.create({
  baseURL: ACCOUNTING_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const getBalanceSheetDataFromApi = async (
  businessDetails: IBusinessDetails
): Promise<IBalanceSheet[]> => {
  const config: AxiosRequestConfig = {
    data: businessDetails,
  };

  try {
    //here Accounting provider api is called in order to get balance sheet
    // const response = await api.post("/balance-sheet", null, config);
    return BALANCE_SHEET;
  } catch (error) {
    throw error;
  }
};
