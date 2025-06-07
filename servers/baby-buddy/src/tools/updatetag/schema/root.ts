import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string(),
  "last_used": z.string().describe("last_used").optional(),
  "name": z.string().describe("name").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional(),
  "b_slug": z.string().regex(new RegExp("^[-\\w]+\\z")).readonly().optional(),
  "b_name": z.string().max(100),
  "color": z.string().regex(new RegExp("^#[0-9a-fA-F]{6}$")).max(32).optional(),
  "b_last_used": z.string().datetime({ offset: true }).readonly().optional()
}