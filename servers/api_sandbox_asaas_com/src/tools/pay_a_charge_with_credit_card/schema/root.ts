import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique payment identifier in Asaas"),
  "creditCard": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `creditCard` to the tool, first call the tool `expandSchema` with \"/properties/creditCard\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Credit card information</property-description>"),
  "creditCardHolderInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `creditCardHolderInfo` to the tool, first call the tool `expandSchema` with \"/properties/creditCardHolderInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Credit card holder information</property-description>"),
  "creditCardToken": z.string().describe("Credit card token for using the credit card tokenization functionality. If informed, the fields above are not mandatory.").optional()
}