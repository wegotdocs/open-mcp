import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "enabled": z.boolean().optional(),
  "required": z.any().nullable().optional(),
  "ignored": z.any().nullable().optional(),
  "indexerId": z.number().int().optional(),
  "tags": z.array(z.number().int()).nullable().optional()
}