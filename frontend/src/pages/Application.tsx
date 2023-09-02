import React from "react";
import BusinessDetailsForm from "../components/BusinessDetailsForm";
import { fetchBalanceSheet } from "../apis/apiBalanceSheet";
import { IBusinessDetails } from "../interfaces/businessDetails";

export default function Application() {
  const handleSubmit = (data: IBusinessDetails) => {
    console.log(fetchBalanceSheet(data));
  };
  return (
    <div className="p-8">
      <BusinessDetailsForm
        handelSubmit={handleSubmit}
        title="Bussines Details Form"
      />
    </div>
  );
}
