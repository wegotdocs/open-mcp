import { z } from "zod"

export const inputParamsSchema = {
  "search": z.number().int().describe("NOKK").optional()
}