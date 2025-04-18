import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "author_id": z.number().int(),
  "email": z.string().describe("The new Git author email.").optional(),
  "name": z.string().describe("The new Git author name.").optional()
}