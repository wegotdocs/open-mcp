import { z } from "zod"

export const inputParams = {
  "query": z.string().optional(),
  "type": z.string().optional(),
  "role": z.string().optional(),
  "min_appearances": z.string().optional(),
  "search_fields": z.string().optional(),
  "order_by": z.string().describe("Handle sorting parameters").optional(),
  "order_dir": z.string().optional()
}