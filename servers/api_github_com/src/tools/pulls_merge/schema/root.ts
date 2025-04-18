import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "commit_title": z.string().describe("Title for the automatic commit message.").optional(),
  "commit_message": z.string().describe("Extra detail to append to automatic commit message.").optional(),
  "sha": z.string().describe("SHA that pull request head must match to allow merge.").optional(),
  "merge_method": z.enum(["merge","squash","rebase"]).describe("The merge method to use.").optional()
}