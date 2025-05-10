import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `proxy` to the tool, first call the tool `expandSchema` with \"/properties/proxy\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key</property-description>").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "include": z.string().nullable().describe("The comma separated list of fields that will be included in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}