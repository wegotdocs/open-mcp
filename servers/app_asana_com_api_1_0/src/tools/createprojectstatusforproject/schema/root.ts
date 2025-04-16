import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["author","author.name","color","created_at","created_by","created_by.name","html_text","modified_at","text","title"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}