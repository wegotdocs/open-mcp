import { z } from "zod"

export const inputParamsSchema = {
  "query": z.array(z.object({ "_eq": z.record(z.any()).optional(), "_name": z.string() })).optional(),
  "excludeFields": z.array(z.string()).optional()
}