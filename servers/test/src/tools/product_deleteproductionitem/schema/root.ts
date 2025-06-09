import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "to_account": z.string(),
  "account_number": z.string()
}