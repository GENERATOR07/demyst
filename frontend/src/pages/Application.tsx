import React, { useState } from "react";
import BusinessDetailsForm from "../components/BusinessDetailsForm";
import { fetchBalanceSheet, submitApplication } from "../apis/api";
import { IBusinessDetails, ILoanApplicationRequest } from "../interfaces";
import BalanceSheetReview, {
  IBalanceSheetItem,
} from "../components/BalanceSheetReview";
import Button from "../components/Button";

import ApplicationResult from "../components/ApplicationResult";

export default function Application() {
  const [balanceSheetData, setBalanceSheetData] = useState<IBalanceSheetItem[]>(
    []
  );
  const [businessDetails, setbusinessDetails] = useState<IBusinessDetails>();
  const [finalResult, setFinalResult] = useState<string | undefined>("");

  const handelFetchBalanceSheet = async (data: IBusinessDetails) => {
    setbusinessDetails(data);
    const balanceSheet = await fetchBalanceSheet(data);
    setBalanceSheetData(balanceSheet);
  };

  const handelSubmit = async () => {
    const finalData: ILoanApplicationRequest = {
      ...businessDetails!,
      balance_sheet: balanceSheetData,
    };
    const result = await submitApplication(finalData);
    setFinalResult(result);
  };
  return finalResult ? (
    <ApplicationResult result={finalResult} />
  ) : (
    <div className="p-8 flex ">
      <BusinessDetailsForm
        handelSubmit={handelFetchBalanceSheet}
        title="Bussines Details Form"
      />
      {balanceSheetData.length ? (
        <div className="w-1/2 max-w-screen-lg mx-auto">
          <BalanceSheetReview data={balanceSheetData} />
          <Button
            label="Review and submit application"
            onClick={handelSubmit}
          />
        </div>
      ) : (
        <p>
          Please fetch balance sheet in order to review and submit application{" "}
        </p>
      )}
    </div>
  );
}
