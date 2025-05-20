import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this tag."),
  "name": z.string().min(1).max(100),
  "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100),
  "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional(),
  "description": z.string().max(200).optional(),
  "weight": z.number().int().gte(0).lte(32767).optional(),
  "object_types": z.array(z.string()).optional()
}