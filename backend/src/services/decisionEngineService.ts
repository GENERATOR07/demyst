import { IDecisionRequestData } from "../interfaces";

export const requestDecision = (data: IDecisionRequestData): string => {
  // here we can use decision engine to a get the results
  return `Application Approved with ${data.preAssessmentValue}% of ur requested loan amount`;
};
