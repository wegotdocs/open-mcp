import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this table config."),
  "object_type": z.string().optional(),
  "table": z.string().min(1).max(100).optional(),
  "name": z.string().min(1).max(100).optional(),
  "description": z.string().max(200).optional(),
  "user": z.number().int().nullable().optional(),
  "weight": z.number().int().gte(0).lte(32767).optional(),
  "enabled": z.boolean().optional(),
  "shared": z.boolean().optional(),
  "columns": z.array(z.string().min(1).max(100)).optional(),
  "ordering": z.array(z.string().min(1).max(100)).nullable().optional()
}