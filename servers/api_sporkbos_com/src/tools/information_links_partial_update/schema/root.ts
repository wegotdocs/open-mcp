import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this information link."),
  "b_id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "page_location": z.string().readonly().optional(),
  "is_visible": z.boolean().optional(),
  "title": z.string().max(255).optional(),
  "description": z.string().optional(),
  "video_link": z.string().describe("Embedded Vimeo link. If no link is provided, only the description will be shown.").optional()
}