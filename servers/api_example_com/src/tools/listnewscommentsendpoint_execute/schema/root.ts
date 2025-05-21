import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User ID").optional(),
  "newsId": z.number().describe("News ID").optional()
}