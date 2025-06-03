import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "business_id": z.string().optional(),
  "invoices": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `invoices` to the tool, first call the tool `expandSchema` with \"/properties/invoices\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "subject": z.string().optional(),
  "content": z.string().optional(),
  "addressees": z.array(z.string()).optional(),
  "template_id": z.string().optional(),
  "signature": z.boolean().optional()
}