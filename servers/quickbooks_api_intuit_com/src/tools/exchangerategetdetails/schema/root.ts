import { z } from "zod"

export const inputParamsSchema = {
  "sourcecurrencycode": z.string().optional(),
  "asofdate": z.string().optional()
}