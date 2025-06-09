import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "account_type": z.enum(["0","1","2","3","4"]),
  "file": z.string()
}