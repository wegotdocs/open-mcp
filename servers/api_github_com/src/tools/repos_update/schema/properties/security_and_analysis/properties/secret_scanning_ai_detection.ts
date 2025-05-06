import { z } from "zod"

export const inputParamsSchema = {
  "status": z.string().describe("Can be `enabled` or `disabled`.").optional()
}