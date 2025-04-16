import { z } from "zod"

export const inputParamsSchema = {
  "duration_minutes": z.number().int().describe("*Optional*. Time in minutes tracked by the entry").optional(),
  "entered_on": z.string().date().describe("*Optional*. The day that this entry is logged on. Defaults to today if no day specified").optional(),
  "attributable_to": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `attributable_to` to the tool, first call the tool `expandSchema` with \"/properties/data/properties/attributable_to\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>*Optional*. The project which the time is attributable to.</property-description>").optional()
}