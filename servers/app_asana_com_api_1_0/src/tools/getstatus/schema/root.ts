import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["author","author.name","created_at","created_by","created_by.name","hearted","hearts","hearts.user","hearts.user.name","html_text","liked","likes","likes.user","likes.user.name","modified_at","num_hearts","num_likes","parent","parent.name","resource_subtype","status_type","text","title"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}