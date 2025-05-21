import { z } from "zod"

export const inputParamsSchema = {
  "end-time": z.string().datetime({ offset: true }),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "offset": z.number().int().gte(0).optional(),
  "query": z.string(),
  "start-time": z.string().datetime({ offset: true })
}