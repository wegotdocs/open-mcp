import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["assignee","assignee.name","created_by","created_by.name","effort","effort.type","effort.value","end_date","parent","parent.name","resource_subtype","start_date"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}