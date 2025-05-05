import { z } from "zod"

export const inputParamsSchema = {
  "schemaName": z.string(),
  "select": z.string().optional(),
  "filter": z.string().optional()
}