import { z } from "zod"

export const inputParams = {
  "companyId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `companyId` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/companyId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "nativeId": z.string(),
  "name": z.string(),
  "mask": z.string(),
  "type": z.enum(["Investment","Invoice","Credit","Depository","Loan","Other","PaymentProcessing","Payroll","Fintech","Sweep"]),
  "currency": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `currency` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/currency\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "subType": z.enum(["Annuity","Brokerage","BrokerageForMinors","CD","Checking","CreditCard","EducationSavingsAccount","HSA","Investment","LineOfCredit","Loan","MoneyMarket","Mortgage","Other","PayPal","Prepaid","ProfitSharingPlan","Retirement","Savings","StockPlan","Stripe","TaxAdvantagedInvestment","Trust","Unknown","CashLike"]).optional()
}