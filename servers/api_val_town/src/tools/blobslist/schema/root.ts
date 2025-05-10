import { z } from "zod"

export const inputParamsSchema = {
  "prefix": z.string().describe("If specified, only include blobs that start with this string").optional()
}