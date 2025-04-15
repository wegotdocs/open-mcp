import { z } from "zod"

export const inputParams = {
  "endDateExclusive": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `endDateExclusive` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/timePeriod/properties/endDateExclusive\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "startDate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `startDate` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/timePeriod/properties/startDate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "interval": z.literal("Month").optional()
}