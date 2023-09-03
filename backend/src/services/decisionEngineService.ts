export interface IdecisionRequestData {
  business_name: string;
  year_established: string;
  summary: string;
  preAssessmentValue: string;
}

export const requestDecision = (data: IdecisionRequestData) => {
  return `Application Approved with ${data.preAssessmentValue}% of ur requested loan amount`;
};
