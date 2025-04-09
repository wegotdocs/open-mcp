import { z } from "zod"

export const inputParams = {
  "financial_account": z.string().max(5000)
}