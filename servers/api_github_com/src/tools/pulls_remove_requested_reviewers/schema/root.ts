import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "reviewers": z.array(z.string()).describe("An array of user `login`s that will be removed."),
  "team_reviewers": z.array(z.string()).describe("An array of team `slug`s that will be removed.").optional()
}