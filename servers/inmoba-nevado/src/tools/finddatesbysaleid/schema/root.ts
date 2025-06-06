import { z } from "zod"

export const inputParamsSchema = {
  "saleId": z.number().int()
}