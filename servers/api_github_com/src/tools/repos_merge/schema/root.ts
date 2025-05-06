import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "base": z.string().describe("The name of the base branch that the head will be merged into."),
  "head": z.string().describe("The head to merge. This can be a branch name or a commit SHA1."),
  "commit_message": z.string().describe("Commit message to use for the merge commit. If omitted, a default message will be used.").optional()
}