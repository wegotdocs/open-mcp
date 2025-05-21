import { z } from "zod"

export const inputParamsSchema = {
  "comment": z.string().describe("Comment text"),
  "userId": z.string().describe("User ID"),
  "newsId": z.number().describe("News ID")
}