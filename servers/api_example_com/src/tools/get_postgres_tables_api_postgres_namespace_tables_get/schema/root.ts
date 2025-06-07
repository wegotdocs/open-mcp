import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "database": z.union([z.string(), z.null()]).optional(),
  "schema": z.string().optional()
}