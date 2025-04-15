import { z } from "zod"

export const inputParamsSchema = {
  "financial_account": z.string().max(5000)
}