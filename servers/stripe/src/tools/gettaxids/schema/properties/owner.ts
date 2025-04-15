import { z } from "zod"

export const inputParamsSchema = {
  "account": z.string().optional(),
  "customer": z.string().max(5000).optional(),
  "type": z.enum(["account","application","customer","self"])
}