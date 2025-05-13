import { z } from "zod"

export const inputParamsSchema = {
  "AllowDeposit": z.boolean().optional(),
  "AllowDiscount": z.boolean().optional(),
  "AllowEstimates": z.boolean().optional(),
  "AllowServiceDate": z.boolean().optional(),
  "AllowShipping": z.boolean().optional(),
  "CustomField": z.array(z.object({ "CustomField": z.array(z.object({ "BooleanValue": z.boolean().optional(), "Name": z.string().optional(), "Type": z.string().optional() })).optional() })).optional(),
  "CustomTxnNumbers": z.boolean().optional(),
  "DefaultCustomerMessage": z.string().optional(),
  "DefaultDiscountAccount": z.string().optional(),
  "DefaultTerms": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `DefaultTerms` to the tool, first call the tool `expandSchema` with \"/properties/SalesFormsPrefs/properties/DefaultTerms\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "ETransactionAttachPDF": z.boolean().optional(),
  "ETransactionEnabledStatus": z.string().optional(),
  "ETransactionPaymentEnabled": z.boolean().optional(),
  "IPNSupportEnabled": z.boolean().optional()
}