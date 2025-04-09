import { z } from "zod"

export const inputParams = {
  "namespace_id": z.string().describe("The ID of the namespace to be managed."),
  "name": z.string().describe("The trigger's unique name within the namespace."),
  "function": z.string().describe("Name of function(action) that exists in the given namespace."),
  "type": z.string().describe("One of different type of triggers. Currently only SCHEDULED is supported."),
  "is_enabled": z.boolean().describe("Indicates weather the trigger is paused or unpaused."),
  "scheduled_details": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `scheduled_details` to the tool, first call the tool `expandSchema` with \"/properties/scheduled_details\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Trigger details for SCHEDULED type, where body is optional.\n</property-description>")
}