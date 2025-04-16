import { z } from "zod"

export const inputParamsSchema = {
  "parent": z.string().describe("Globally unique identifier for `goal`, `project`, `portfolio`, or `custom_field`.").optional(),
  "member": z.string().describe("Globally unique identifier for `team` or `user`.").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["offset","path","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}