import { ILoanApplicationRequest } from "../interfaces";
import { IdecisionRequestData, requestDecision } from "./decisionEngineService";
import { findPreAssessmentValue } from "./helper";

export const processLoanApplication = async (
  applicationData: ILoanApplicationRequest
): Promise<string> => {
  const {
    business_name,
    year_established,
    summary,
    loan_amount,
    balance_sheet,
  } = applicationData;
  try {
    const preAssessmentValue = findPreAssessmentValue(
      balance_sheet,
      parseInt(loan_amount)
    );
    const decisionEngineData: IdecisionRequestData = {
      business_name,
      year_established,
      summary,
      preAssessmentValue,
    };

    const applicationResult = requestDecision(decisionEngineData);
    return applicationResult;
  } catch (error) {
    throw error;
  }
};
