import { z } from "zod"

export const inputParamsSchema = {
  "environment": z.union([z.string(), z.null()]).describe("Filter resources by environment").optional()
}