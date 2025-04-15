import { z } from "zod"

export const inputParamsSchema = {
  "headless": z.boolean().describe("If `true`, open Link without an initial UI. Defaults to `false`.").optional()
}