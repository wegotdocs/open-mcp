import { z } from "zod"

export const inputParamsSchema = {
  "active": z.boolean().describe("true or false").optional()
}