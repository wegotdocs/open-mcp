import { z } from "zod"

export const inputParamsSchema = {
  "object_type": z.string(),
  "table": z.string().min(1).max(100),
  "name": z.string().min(1).max(100),
  "description": z.string().max(200).optional(),
  "user": z.number().int().nullable().optional(),
  "weight": z.number().int().gte(0).lte(32767).optional(),
  "enabled": z.boolean().optional(),
  "shared": z.boolean().optional(),
  "columns": z.array(z.string().min(1).max(100)),
  "ordering": z.array(z.string().min(1).max(100)).nullable().optional()
}