import { z } from "zod"

export const inputParamsSchema = {
  "containerSpecCode": z.string(),
  "warehouseCode": z.string()
}