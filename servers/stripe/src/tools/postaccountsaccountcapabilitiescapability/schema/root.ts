import { z } from "zod"

export const inputParamsSchema = {
  "account": z.string().max(5000),
  "capability": z.string()
}