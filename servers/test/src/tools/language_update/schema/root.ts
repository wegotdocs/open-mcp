import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "id": z.number().int(),
  "name": z.string().optional(),
  "code": z.string().optional(),
  "main": z.boolean().optional(),
  "active": z.boolean().optional()
}