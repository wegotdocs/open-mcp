import { z } from "zod"

export const inputParamsSchema = {
  "identifyNo": z.string(),
  "warehouseCode": z.string()
}