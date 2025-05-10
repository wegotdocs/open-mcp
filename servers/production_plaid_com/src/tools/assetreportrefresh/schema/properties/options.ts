import { z } from "zod"

export const inputParamsSchema = {
  "client_report_id": z.string().nullable().describe("Client-generated identifier, which can be used by lenders to track loan applications.").optional(),
  "webhook": z.string().nullable().describe("URL to which Plaid will send Assets webhooks, for example when the requested Asset Report is ready.").optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/options/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The user object allows you to provide additional information about the user to be appended to the Asset Report. All fields are optional. The `first_name`, `last_name`, and `ssn` fields are required if you would like the Report to be eligible for Fannie Mae’s Day 1 Certainty™ program.</property-description>").optional()
}