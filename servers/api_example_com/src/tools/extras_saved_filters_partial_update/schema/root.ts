import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this saved filter."),
  "object_types": z.array(z.string()).optional(),
  "name": z.string().min(1).max(100).optional(),
  "slug": z.string().regex(new RegExp("^[-a-zA-Z0-9_]+$")).min(1).max(100).optional(),
  "description": z.string().max(200).optional(),
  "user": z.number().int().nullable().optional(),
  "weight": z.number().int().gte(0).lte(32767).optional(),
  "enabled": z.boolean().optional(),
  "shared": z.boolean().optional(),
  "parameters": z.any().optional()
}