import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["action","change","change.action","change.added_value","change.field","change.new_value","change.removed_value","created_at","parent","parent.name","resource","resource.name","type","user","user.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}