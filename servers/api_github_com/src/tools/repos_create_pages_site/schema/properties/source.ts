import { z } from "zod"

export const inputParamsSchema = {
  "branch": z.string().describe("The repository branch used to publish your site's source files."),
  "path": z.enum(["/","/docs"]).describe("The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`").optional()
}