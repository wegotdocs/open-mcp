import { z } from "zod"

export const inputParamsSchema = {
  "cuepointSchedule": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `cuepointSchedule` to the tool, first call the tool `expandSchema` with \"/properties/monetizationDetails/properties/cuepointSchedule\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Schedule to insert cuepoints into a broadcast by ads automator.</property-description>").optional()
}