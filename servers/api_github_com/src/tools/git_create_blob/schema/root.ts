import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "content": z.string().describe("The new blob's content."),
  "encoding": z.string().describe("The encoding used for `content`. Currently, `\"utf-8\"` and `\"base64\"` are supported.").optional()
}