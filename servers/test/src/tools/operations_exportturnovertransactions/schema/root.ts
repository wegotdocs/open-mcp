import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "date_from": z.string(),
  "date_to": z.string(),
  "parent_id": z.number().int().optional()
}