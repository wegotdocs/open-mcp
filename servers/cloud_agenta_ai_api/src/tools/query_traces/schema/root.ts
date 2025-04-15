import { z } from "zod"

export const inputParams = {
  "format": z.enum(["opentelemetry","agenta"]).optional(),
  "focus": z.union([z.string(), z.null()]).optional(),
  "oldest": z.union([z.string(), z.null()]).optional(),
  "newest": z.union([z.string(), z.null()]).optional(),
  "filtering": z.union([z.string(), z.null()]).optional(),
  "page": z.union([z.number().int(), z.null()]).optional(),
  "size": z.union([z.number().int(), z.null()]).optional(),
  "next": z.union([z.string(), z.null()]).optional(),
  "stop": z.union([z.string(), z.null()]).optional()
}