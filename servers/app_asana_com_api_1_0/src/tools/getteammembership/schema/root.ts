import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["is_admin","is_guest","is_limited_access","team","team.name","user","user.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}