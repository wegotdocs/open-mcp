import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "from": z.string().optional(),
  "to": z.string().optional()
}