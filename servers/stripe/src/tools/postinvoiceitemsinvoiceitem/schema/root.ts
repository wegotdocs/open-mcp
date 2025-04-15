import { z } from "zod"

export const inputParamsSchema = {
  "invoiceitem": z.string().max(5000)
}