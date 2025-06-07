import { z } from "zod"

export const inputParamsSchema = {
  "force": z.boolean().describe("Force push changes").optional()
}