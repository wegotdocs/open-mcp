import { z } from "zod"

export const inputParamsSchema = {
  "cron": z.string().describe("valid cron expression string which is required for SCHEDULED type triggers."),
  "body": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `body` to the tool, first call the tool `expandSchema` with \"/properties/scheduled_details/properties/body\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Optional data to be sent to function while triggering the function.</property-description>").optional()
}