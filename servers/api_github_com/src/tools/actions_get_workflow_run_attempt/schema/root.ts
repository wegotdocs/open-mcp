import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run."),
  "attempt_number": z.number().int().describe("The attempt number of the workflow run."),
  "exclude_pull_requests": z.boolean().describe("If `true` pull requests are omitted from the response (empty array).").optional()
}