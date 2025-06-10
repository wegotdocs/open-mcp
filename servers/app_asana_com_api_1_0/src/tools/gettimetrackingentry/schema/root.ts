import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["attributable_to","attributable_to.name","created_at","created_by","created_by.name","duration_minutes","entered_on","task","task.created_by","task.name","task.resource_subtype"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}