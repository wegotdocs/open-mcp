import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["created_at","download_url","organization","organization.name","state"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `data` to the tool, first call the tool `expandSchema` with \"/properties/data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>An *organization_export* request starts a job to export the complete data of the given Organization.</property-description>").optional()
}