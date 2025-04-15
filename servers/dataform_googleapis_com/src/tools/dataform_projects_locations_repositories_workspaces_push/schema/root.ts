import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Required. The workspace's name."),
  "remoteBranch": z.string().describe("Optional. The name of the branch in the Git remote to which commits should be pushed. If left unset, the repository's default branch name will be used.").optional()
}