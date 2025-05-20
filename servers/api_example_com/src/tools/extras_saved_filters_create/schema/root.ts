import { z } from "zod"

export const inputParamsSchema = {
  "object_types": z.array(z.string()),
  "name": z.string().min(1).max(100),
  "slug": z.string().regex(new RegExp("^[-a-zA-Z0-9_]+$")).min(1).max(100),
  "description": z.string().max(200).optional(),
  "user": z.number().int().nullable().optional(),
  "weight": z.number().int().gte(0).lte(32767).optional(),
  "enabled": z.boolean().optional(),
  "shared": z.boolean().optional(),
  "parameters": z.any()
}