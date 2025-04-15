import { z } from "zod"

export const inputParamsSchema = {
  "namespace_id": z.string().describe("The ID of the namespace to be managed."),
  "trigger_name": z.string().describe("The name of the trigger to be managed."),
  "is_enabled": z.boolean().describe("Indicates weather the trigger is paused or unpaused.").optional(),
  "scheduled_details": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `scheduled_details` to the tool, first call the tool `expandSchema` with \"/properties/scheduled_details\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Trigger details for SCHEDULED type, where body is optional.\n</property-description>").optional()
}