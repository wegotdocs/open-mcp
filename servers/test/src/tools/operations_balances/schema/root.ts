import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "date": z.string(),
  "parent_id": z.number().int().optional()
}