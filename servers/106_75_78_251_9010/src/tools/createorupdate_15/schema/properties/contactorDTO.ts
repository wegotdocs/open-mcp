import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "tel": z.string().optional(),
  "mail": z.string().optional(),
  "fax": z.string().optional()
}