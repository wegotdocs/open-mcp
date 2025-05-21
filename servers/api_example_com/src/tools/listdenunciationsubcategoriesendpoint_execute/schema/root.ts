import { z } from "zod"

export const inputParamsSchema = {
  "categoryId": z.number().describe("Category ID").optional()
}