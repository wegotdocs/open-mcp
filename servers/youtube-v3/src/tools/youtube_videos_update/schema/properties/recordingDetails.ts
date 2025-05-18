import { z } from "zod"

export const inputParamsSchema = {
  "location": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `location` to the tool, first call the tool `expandSchema` with \"/properties/recordingDetails/properties/location\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The geolocation information associated with the video.</property-description>").optional(),
  "locationDescription": z.string().describe("The text description of the location where the video was recorded.").optional(),
  "recordingDate": z.string().datetime({ offset: true }).describe("The date and time when the video was recorded.").optional()
}