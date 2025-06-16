import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The GitHub organization name"),
  "repo_name": z.string().describe("The GitHub repository name")
}