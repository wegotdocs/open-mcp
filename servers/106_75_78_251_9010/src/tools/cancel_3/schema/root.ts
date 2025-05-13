import { z } from "zod"

export const inputParamsSchema = {
  "identifyNos": z.array(z.string()).optional(),
  "warehouseCode": z.string().optional()
}