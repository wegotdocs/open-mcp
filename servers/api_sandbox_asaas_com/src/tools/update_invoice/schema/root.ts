import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique invoice identifier in Asaas"),
  "serviceDescription": z.string().describe("Description of invoice services").optional(),
  "observations": z.string().describe("Additional observations").optional(),
  "externalReference": z.string().describe("Invoice identifier in your system").optional(),
  "value": z.number().describe("Total value").optional(),
  "deductions": z.number().describe("Deductions. Deductions do not change the total value of the invoice, but they do change the ISS calculation basis.").optional(),
  "effectiveDate": z.string().date().describe("Invoice issuance date").optional(),
  "updatePayment": z.boolean().describe("Update the Payment amount with the invoice taxes already deducted.").optional(),
  "taxes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `taxes` to the tool, first call the tool `expandSchema` with \"/properties/taxes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Invoice taxes</property-description>").optional()
}