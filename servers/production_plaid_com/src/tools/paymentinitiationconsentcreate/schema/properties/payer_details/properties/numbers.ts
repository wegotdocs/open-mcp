import { z } from "zod"

export const inputParamsSchema = {
  "bacs": z.string().optional(),
  "iban": z.string().optional()
}