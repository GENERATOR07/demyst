import { ILoanApplicationRequest } from "../interfaces";
import { IBusinessDetails } from "../interfaces";
import axios from "axios";
const BASE_URL: string = "http://localhost:3000/api/";
const api = axios.create({
  baseURL: BASE_URL,
});
export const fetchBalanceSheet = async (data: IBusinessDetails) => {
  try {
    const balanceSheet = await api.post("balance-sheet", data);

    return balanceSheet.data;
  } catch (err) {
    console.log(err.msg);
  }
};

export const submitApplication = async (
  data: ILoanApplicationRequest
): Promise<string | undefined> => {
  try {
    const response = await api.post("submit-application", data);
    console.log(response);
    return response.data.result;
  } catch (err) {
    return err.message;
  }
};
