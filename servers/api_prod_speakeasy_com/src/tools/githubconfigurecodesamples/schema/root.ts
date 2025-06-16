import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The GitHub organization name"),
  "repo": z.string().describe("The GitHub repository name"),
  "targetName": z.string().describe("The target name for the code samples")
}