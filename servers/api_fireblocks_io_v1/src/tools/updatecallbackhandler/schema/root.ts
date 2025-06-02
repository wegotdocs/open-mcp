import { z } from "zod"

export const inputParamsSchema = {
  "cosignerId": z.string().uuid().describe("The unique identifier of the cosigner"),
  "apiKeyId": z.string().describe("The unique identifier of the API key"),
  "callbackHandler": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `callbackHandler` to the tool, first call the tool `expandSchema` with \"/properties/callbackHandler\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}