import React, { FormEvent, useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import TextareaField from "./TextAreaField";
import DropdownField from "./Dropdownfield";
import { ACCOUNTING_PROVIDERS } from "../constants/AccountingProvides";
import { IBusinessDetails } from "../interfaces/businessDetails";
interface FormProps {
  title: string;
  handelSubmit: Function;
}
const Form: React.FC<FormProps> = ({ title, handelSubmit }) => {
  const [formData, setFormData] = useState<IBusinessDetails>({
    business_name: "",
    year_established: "",
    summary: "",
    accounting_provider: "",
    loan_amount: "",
  });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handelSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;

    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full flex flex-col gap-2 divide-y-2 divide-gray-400">
      <h1>{title}</h1>
      <form className="w-1/2 p-2 mr-10" onSubmit={handleFormSubmit}>
        <InputField
          fieldname="business_name"
          label="Business Name"
          type="text"
          placeholder="Enter business name"
          value={formData.business_name}
          onChange={handleInputChange}
        />
        <InputField
          fieldname="year_established"
          label="Year Established"
          type="date"
          value={formData.year_established}
          onChange={handleInputChange}
        />
        <TextareaField
          fieldname="summary"
          label="Summary of Profit or loss by the year"
          value={formData.summary}
          onChange={handleInputChange}
        />
        <InputField
          label="loan Amount"
          fieldname="loan_amount"
          type="number"
          value={formData.loan_amount}
          onChange={handleInputChange}
        />

        <DropdownField
          fieldname="accounting_provider"
          label="Select Accounting Providers"
          options={ACCOUNTING_PROVIDERS}
          value={formData.accounting_provider}
          onChange={handleInputChange}
        />
        <Button label="Request Balance sheet" />
      </form>
    </div>
  );
};
export default Form;
