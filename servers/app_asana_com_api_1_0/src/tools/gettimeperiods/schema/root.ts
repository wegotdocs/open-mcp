import { z } from "zod"

export const inputParamsSchema = {
  "start_on": z.string().date().describe("ISO 8601 date string").optional(),
  "end_on": z.string().date().describe("ISO 8601 date string").optional(),
  "workspace": z.string().describe("Globally unique identifier for the workspace."),
  "opt_fields": z.array(z.enum(["display_name","end_on","offset","parent","parent.display_name","parent.end_on","parent.period","parent.start_on","path","period","start_on","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}