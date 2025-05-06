import { z } from "zod"

export const inputParamsSchema = {
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "comment_id": z.number().int().describe("The unique identifier of the comment.")
}