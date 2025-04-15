import { z } from "zod"

export const inputParams = {
  "certificateParameters": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `certificateParameters` to the tool, first call the tool `expandSchema` with \"/properties/certificateParameters\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "consentArtifact": z.any().optional(),
  "format": z.literal("pdf").describe("The format of the certificate in response."),
  "txnId": z.string().uuid().describe("A unique transaction id for this request in UUID format. It is used for tracking the request.")
}