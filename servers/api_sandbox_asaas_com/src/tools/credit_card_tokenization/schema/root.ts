import { z } from "zod"

export const inputParamsSchema = {
  "customer": z.string().describe("Unique customer identifier in Asaas"),
  "creditCard": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `creditCard` to the tool, first call the tool `expandSchema` with \"/properties/creditCard\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Credit card information</property-description>"),
  "creditCardHolderInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `creditCardHolderInfo` to the tool, first call the tool `expandSchema` with \"/properties/creditCardHolderInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Credit card holder information</property-description>"),
  "remoteIp": z.string().describe("IP from where the customer is making the purchase. Your server's IP must not be entered.")
}