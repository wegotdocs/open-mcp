import { z } from "zod"

export const inputParamsSchema = {
  "targetName": z.string().describe("The targetName of the workflow target.").optional(),
  "org": z.string(),
  "repo": z.string()
}