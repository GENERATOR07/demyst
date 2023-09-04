import { IBalanceSheet } from "../interfaces";

/*here the code is written Assuming that the first  12 items(months) of balance sheet is latest data,
 in case balance sheet has more than 12 months of data ,
 we can also restrict it during validation but as of now this is how it is
*/

const profitLastYear = (balanceSheet: IBalanceSheet[]): number => {
  let profit: number = 0;

  for (let i = 0; i < 12; i++) {
    profit += balanceSheet[i].profitOrLoss;
  }
  return profit;
};

const averageAssetValueAcrossYear = (balanceSheet: IBalanceSheet[]): number => {
  let totalAssetValue: number = 0;
  for (let i = 0; i < 12; i++) {
    totalAssetValue += balanceSheet[i].assetsValue;
  }
  const averageAssetValue = totalAssetValue / 12;
  return averageAssetValue;
};

export const findPreAssessmentValue = (
  balance_sheet: IBalanceSheet[],
  loan_amount: number
): string => {
  let preAssessmentValue: string = "20";
  if (profitLastYear(balance_sheet) > 0) preAssessmentValue = "60";
  if (averageAssetValueAcrossYear(balance_sheet) > loan_amount)
    preAssessmentValue = "100";
  return preAssessmentValue;
};
