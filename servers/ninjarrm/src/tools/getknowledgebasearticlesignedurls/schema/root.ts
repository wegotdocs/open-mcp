import { z } from "zod"

export const inputParamsSchema = {
  "articleId": z.number().int()
}