import { z } from "zod"

export const inputParamsSchema = {
  "warehouseAreaId": z.number().int(),
  "aisleCode": z.string()
}