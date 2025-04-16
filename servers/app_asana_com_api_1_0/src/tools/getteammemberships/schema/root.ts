import { z } from "zod"

export const inputParamsSchema = {
  "team": z.string().describe("Globally unique identifier for the team.").optional(),
  "user": z.string().describe("A string identifying a user. This can either be the string \"me\", an email, or the gid of a user. This parameter must be used with the workspace parameter.").optional(),
  "workspace": z.string().describe("Globally unique identifier for the workspace. This parameter must be used with the user parameter.").optional(),
  "opt_fields": z.array(z.enum(["is_admin","is_guest","is_limited_access","offset","path","team","team.name","uri","user","user.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}