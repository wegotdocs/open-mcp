import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["connected_to_app","created_at","download_url","host","name","parent","parent.created_by","parent.name","parent.resource_subtype","permanent_url","resource_subtype","size","view_url"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}