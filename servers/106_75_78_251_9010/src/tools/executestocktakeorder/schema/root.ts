import { z } from "zod"

export const inputParamsSchema = {
  "warehouseCode": z.string().min(0).max(64),
  "orderNos": z.array(z.string()),
  "taskCount": z.number().int().gte(1).optional()
}