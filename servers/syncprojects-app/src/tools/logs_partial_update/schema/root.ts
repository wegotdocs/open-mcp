import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("A unique integer value identifying this client log."),
  "b_id": z.number().int().readonly().optional(),
  "user": z.number().int().readonly().optional(),
  "date": z.string().datetime({ offset: true }).optional(),
  "log_compressed": z.string().readonly().optional()
}