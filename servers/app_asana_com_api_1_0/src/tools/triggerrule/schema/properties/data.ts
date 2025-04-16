import { z } from "zod"

export const inputParamsSchema = {
  "resource": z.string().describe("The ID of the resource. For the duration of the beta, this resource is always a task, and this task must exist in the project in which the rule is created."),
  "action_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `action_data` to the tool, first call the tool `expandSchema` with \"/properties/data/properties/action_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The dynamic keys and values of the request. These fields are intended to be used in the action for the rule associated with this trigger.</property-description>")
}