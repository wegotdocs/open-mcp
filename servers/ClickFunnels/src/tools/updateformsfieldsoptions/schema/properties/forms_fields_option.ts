import { z } from "zod"

export const inputParamsSchema = {
  "label": z.string().describe("Label").optional()
}