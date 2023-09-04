import Joi from "joi";
import {
  IBalanceSheet,
  IBusinessDetails,
  ILoanApplicationRequest,
} from "../interfaces";

export const validateBusinessDetails = (data: IBusinessDetails) => {
  const schema = Joi.object<IBusinessDetails>({
    business_name: Joi.string().required(),
    year_established: Joi.string().required(),
    summary: Joi.string().required(),
    accounting_provider: Joi.string().required(),
    loan_amount: Joi.string().required(),
  });

  return schema.validate(data);
};

// Validation schema for BalanceSheet
export const validateBalanceSheet = (data: IBalanceSheet) => {
  const schema = Joi.object({
    year: Joi.number().integer().required(),
    month: Joi.number().integer().required(),
    profitOrLoss: Joi.number().required(),
    assetsValue: Joi.number().required(),
  });

  return schema.validate(data);
};

// Validation schema for LoanApplicationRequest
export const validateLoanApplicationRequest = (
  data: ILoanApplicationRequest
) => {
  const schema = Joi.object({
    business_name: Joi.string().required(),
    year_established: Joi.string().required(),
    summary: Joi.string().required(),
    accounting_provider: Joi.string().required(),
    loan_amount: Joi.number().positive().required(),
    balance_sheet: Joi.array()
      .items(
        Joi.object().keys({
          year: Joi.number().integer().required(),
          month: Joi.number().integer().required(),
          profitOrLoss: Joi.number().required(),
          assetsValue: Joi.number().required(),
        })
      )
      .required()
      .min(12),
  });

  return schema.validate(data);
};
