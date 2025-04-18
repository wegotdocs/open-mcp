import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "lock_reason": z.enum(["off-topic","too heated","resolved","spam"]).describe("The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:  \n * `off-topic`  \n * `too heated`  \n * `resolved`  \n * `spam`").optional()
}