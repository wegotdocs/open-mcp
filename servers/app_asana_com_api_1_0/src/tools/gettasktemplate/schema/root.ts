import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["created_at","created_by","name","project","template"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}