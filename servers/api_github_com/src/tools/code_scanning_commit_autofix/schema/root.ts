import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly(),
  "target_ref": z.string().describe("The Git reference of target branch for the commit. Branch needs to already exist.  For more information, see \"[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)\" in the Git documentation.").optional(),
  "message": z.string().describe("Commit message to be used.").optional()
}