import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this dojo meta."),
  "product": z.number().int().nullable().optional(),
  "endpoint": z.number().int().nullable().optional(),
  "finding": z.number().int().nullable().optional(),
  "name": z.string().min(1).max(120).optional(),
  "value": z.string().min(1).max(300).optional()
}