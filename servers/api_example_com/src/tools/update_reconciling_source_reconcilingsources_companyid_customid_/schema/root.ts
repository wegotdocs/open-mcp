import { z } from "zod"

export const inputParamsSchema = {
  "customId": z.string(),
  "companyId": z.string(),
  "name": z.string().describe("Name of the reconciling source").optional(),
  "additionalInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `additionalInfo` to the tool, first call the tool `expandSchema` with \"/properties/additionalInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional information about the reconciling source</property-description>").optional(),
  "matchingMetadataKey": z.string().describe("Metadata key of the reconciling items to match with product transactions").optional()
}