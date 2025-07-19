import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string().describe("Must be valid 16 digits NIK").optional()
}