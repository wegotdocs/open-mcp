import { z } from "zod"

export const inputParamsSchema = {
  "warehouseCode": z.string(),
  "containerSpecCode": z.string(),
  "containerCode": z.string(),
  "locationCode": z.string().optional()
}