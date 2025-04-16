import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["color","description","html_description","name","owner","public","requested_dates","requested_dates.description","requested_dates.name","requested_roles","requested_roles.name","team","team.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}