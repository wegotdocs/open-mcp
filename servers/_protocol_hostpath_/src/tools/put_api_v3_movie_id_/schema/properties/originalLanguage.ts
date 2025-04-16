import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional()
}