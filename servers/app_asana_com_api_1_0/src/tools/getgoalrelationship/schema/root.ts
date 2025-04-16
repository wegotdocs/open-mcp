import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["contribution_weight","resource_subtype","supported_goal","supported_goal.name","supported_goal.owner","supported_goal.owner.name","supporting_resource","supporting_resource.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}