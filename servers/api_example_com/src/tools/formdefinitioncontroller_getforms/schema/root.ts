import { z } from "zod"

export const inputParamsSchema = {
  "formTypes": z.enum(["startform","tableform","all"]).describe("A comma-delimited list of form types to return. If not specified, only start forms are returned.").optional(),
  "includeMyNintexFormsOnly": z.boolean().describe("When set to true, only start forms published with the 'Nintex Mobile and My Nintex' option are included. If false, all start forms the user has access to are included.").optional(),
  "Authorization": z.string()
}