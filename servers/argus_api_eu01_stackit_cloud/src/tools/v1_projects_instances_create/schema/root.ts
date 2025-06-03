import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.string(),
  "name": z.string().min(1).max(200).describe("Name of the service").optional(),
  "parameter": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `parameter` to the tool, first call the tool `expandSchema` with \"/properties/parameter\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>additional parameters</property-description>").optional(),
  "planId": z.string().describe("uuid of the plan to create/update"),
  "Authorization": z.string().describe("Accepts technical api gateway access.")
}