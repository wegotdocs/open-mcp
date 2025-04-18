import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "body": z.string().describe("The contents of the comment.")
}