import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "parent": z.string().describe("Globally unique identifier for object to fetch statuses from. Must be a GID for a `project`, `project_brief`, or `task`."),
  "opt_fields": z.array(z.enum(["connected_to_app","created_at","download_url","host","name","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permanent_url","resource_subtype","size","uri","view_url"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}