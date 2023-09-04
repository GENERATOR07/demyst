export interface IBusinessDetails {
  business_name: string;
  year_established: string;
  summary: string;
  accounting_provider: string;
  loan_amount: string;
}

export interface IBalanceSheet {
  year: number;
  month: number;
  profitOrLoss: number;
  assetsValue: number;
}

export interface ILoanApplicationRequest extends IBusinessDetails {
  balance_sheet: IBalanceSheet[];
}

export interface IDecisionRequestData {
  business_name: string;
  year_established: string;
  summary: string;
  preAssessmentValue: string;
}
