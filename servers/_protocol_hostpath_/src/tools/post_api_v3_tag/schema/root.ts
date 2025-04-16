import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "label": z.string().nullable().optional()
}