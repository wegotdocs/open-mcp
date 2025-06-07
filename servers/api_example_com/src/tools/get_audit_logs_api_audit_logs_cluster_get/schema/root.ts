import { z } from "zod"

export const inputParamsSchema = {
  "cluster": z.string(),
  "limit": z.number().int().describe("Maximum number of entries to return").optional(),
  "verb": z.union([z.string(), z.null()]).optional(),
  "object_kind": z.union([z.string(), z.null()]).optional(),
  "user": z.union([z.string(), z.null()]).optional()
}