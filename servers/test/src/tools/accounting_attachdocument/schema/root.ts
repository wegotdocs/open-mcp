import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "account_id": z.number().int(),
  "file": z.string()
}