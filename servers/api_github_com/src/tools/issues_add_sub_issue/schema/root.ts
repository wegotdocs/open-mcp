import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "sub_issue_id": z.number().int().describe("The id of the sub-issue to add. The sub-issue must belong to the same repository owner as the parent issue"),
  "replace_parent": z.boolean().describe("Option that, when true, instructs the operation to replace the sub-issues current parent issue").optional()
}