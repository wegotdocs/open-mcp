import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string().describe("NOKK").optional()
}