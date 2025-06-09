import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "to_date": z.string(),
  "account_number": z.string(),
  "limit": z.number().int().optional()
}