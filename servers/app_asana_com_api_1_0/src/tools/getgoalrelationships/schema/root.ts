import { z } from "zod"

export const inputParamsSchema = {
  "opt_pretty": z.boolean().describe("Provides “pretty” output.\nProvides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "supported_goal": z.string().describe("Globally unique identifier for the supported goal in the goal relationship."),
  "resource_subtype": z.string().describe("If provided, filter to goal relationships with a given resource_subtype.").optional(),
  "opt_fields": z.array(z.enum(["contribution_weight","offset","path","resource_subtype","supported_goal","supported_goal.name","supported_goal.owner","supported_goal.owner.name","supporting_resource","supporting_resource.name","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}