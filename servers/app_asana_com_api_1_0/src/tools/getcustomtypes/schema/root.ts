import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["name","offset","path","status_options","status_options.color","status_options.completion_state","status_options.enabled","status_options.name","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}