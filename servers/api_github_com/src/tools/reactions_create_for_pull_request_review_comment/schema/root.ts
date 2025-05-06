import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the pull request review comment.")
}