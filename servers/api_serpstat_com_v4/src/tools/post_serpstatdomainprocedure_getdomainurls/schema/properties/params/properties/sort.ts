import { z } from "zod"

export const inputParamsSchema = {
  "keywords": z.enum(["asc","desc"]).describe("Sort by the number of keywords").optional()
}