import { z } from "zod"

export const inputParams = {
  "companyId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `companyId` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/companyId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "transactionId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `transactionId` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/transactionId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "documentType": z.literal("Receipt"),
  "fileName": z.string(),
  "contentType": z.string(),
  "base64File": z.string()
}