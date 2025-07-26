import { z } from "zod"

export const inputParamsSchema = {
  "product": z.number().int().nullable().optional(),
  "endpoint": z.number().int().nullable().optional(),
  "finding": z.number().int().nullable().optional(),
  "metadata": z.array(z.object({ "name": z.string().min(1).max(120), "value": z.string().min(1).max(300) }))
}