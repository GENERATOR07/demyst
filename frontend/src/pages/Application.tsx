import React, { useState } from "react";
import BusinessDetailsForm from "../components/BusinessDetailsForm";
import { fetchBalanceSheet } from "../apis/api";
import { IBusinessDetails } from "../interfaces/businessDetails";
import BalanceSheetReview, {
  IBalanceSheetItem,
} from "../components/BalanceSheetReview";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Application() {
  const [balanceSheetData, setBalanceSheetData] = useState<IBalanceSheetItem[]>(
    []
  );
  const navigate = useNavigate();
  const handelFetchBalanceSheet = (data: IBusinessDetails) => {
    const balanceSheet = fetchBalanceSheet(data);
    setBalanceSheetData(balanceSheet);
  };

  const handelSubmit = () => {
    navigate("/results");
  };
  return (
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
