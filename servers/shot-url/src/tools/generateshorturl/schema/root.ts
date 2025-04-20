import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("nullable").optional(),
  "url": z.string().optional()
}