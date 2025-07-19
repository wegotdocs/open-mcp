import { z } from "zod"

export const inputParamsSchema = {
  "search": z.number().int().describe("Must be valid NIK").optional()
}