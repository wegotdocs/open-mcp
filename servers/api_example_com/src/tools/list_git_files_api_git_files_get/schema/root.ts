import { z } from "zod"

export const inputParamsSchema = {
  "path": z.string().describe("Path relative to repository root").optional()
}