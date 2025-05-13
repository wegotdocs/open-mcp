import { z } from "zod"

export const inputParamsSchema = {
  "acceptOrderId": z.number().int(),
  "acceptOrderDetailId": z.number().int().optional()
}