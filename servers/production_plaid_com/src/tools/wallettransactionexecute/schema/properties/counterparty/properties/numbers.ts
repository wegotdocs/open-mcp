import { z } from "zod"

export const inputParamsSchema = {
  "bacs": z.string().optional(),
  "international": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `international` to the tool, first call the tool `expandSchema` with \"/properties/counterparty/properties/numbers/properties/international\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>International Bank Account Number for a Wallet Transaction</property-description>").optional()
}