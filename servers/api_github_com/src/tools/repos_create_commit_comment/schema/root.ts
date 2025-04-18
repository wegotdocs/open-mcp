import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "commit_sha": z.string().describe("The SHA of the commit."),
  "body": z.string().describe("The contents of the comment."),
  "path": z.string().describe("Relative path of the file to comment on.").optional(),
  "position": z.number().int().describe("Line index in the diff to comment on.").optional(),
  "line": z.number().int().describe("**Closing down notice**. Use **position** parameter instead. Line number in the file to comment on.").optional()
}