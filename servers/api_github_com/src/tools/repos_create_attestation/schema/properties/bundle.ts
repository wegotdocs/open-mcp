import { z } from "zod"

export const inputParamsSchema = {
  "mediaType": z.string().optional(),
  "verificationMaterial": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `verificationMaterial` to the tool, first call the tool `expandSchema` with \"/properties/bundle/properties/verificationMaterial\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "dsseEnvelope": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `dsseEnvelope` to the tool, first call the tool `expandSchema` with \"/properties/bundle/properties/dsseEnvelope\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}