import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "schema": z.string(),
  "table": z.string(),
  "database": z.union([z.string(), z.null()]).optional()
}