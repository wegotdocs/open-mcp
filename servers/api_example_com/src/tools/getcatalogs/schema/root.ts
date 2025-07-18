import { z } from "zod"

export const inputParamsSchema = {
  "active": z.boolean().describe("bool").optional()
}