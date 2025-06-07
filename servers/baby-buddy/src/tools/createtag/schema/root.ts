import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string().regex(new RegExp("^[-\\w]+\\z")).readonly().optional(),
  "name": z.string().max(100),
  "color": z.string().regex(new RegExp("^#[0-9a-fA-F]{6}$")).max(32).optional(),
  "last_used": z.string().datetime({ offset: true }).readonly().optional()
}