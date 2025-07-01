import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique subscription identifier in Asaas"),
  "deductions": z.number().describe("Deductions. Deductions do not change the total value of the invoice, but they do change the ISS calculation basis.").optional(),
  "effectiveDatePeriod": z.enum(["ON_PAYMENT_CONFIRMATION","ON_PAYMENT_DUE_DATE","BEFORE_PAYMENT_DUE_DATE","ON_DUE_DATE_MONTH","ON_NEXT_MONTH"]).describe("When the invoice will be issued").optional(),
  "receivedOnly": z.boolean().describe("Issue only for paid charges").optional(),
  "daysBeforeDueDate": z.number().int().describe("Number of days before billing due date").optional(),
  "observations": z.string().describe("Additional notes on the invoice").optional(),
  "taxes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `taxes` to the tool, first call the tool `expandSchema` with \"/properties/taxes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Invoice taxes</property-description>").optional()
}