import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "id": z.number().int().optional(),
  "name": z.string().optional(),
  "key": z.string(),
  "group_id": z.number().int().optional()
}