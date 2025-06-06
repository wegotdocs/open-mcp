import { z } from "zod"

export const inputParamsSchema = {
  "categoryId": z.number().int()
}