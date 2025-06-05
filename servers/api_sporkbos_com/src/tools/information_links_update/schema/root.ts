import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this information link."),
  "b_id": z.number().int().readonly(),
  "created_by": z.string(),
  "updated_by": z.string(),
  "deleted_by": z.string(),
  "ulid": z.string().readonly(),
  "created_at": z.string().datetime({ offset: true }).readonly(),
  "updated_at": z.string().datetime({ offset: true }).readonly(),
  "deleted_at": z.string().datetime({ offset: true }).readonly(),
  "page_location": z.string().readonly(),
  "is_visible": z.boolean().optional(),
  "title": z.string().max(255),
  "description": z.string().optional(),
  "video_link": z.string().describe("Embedded Vimeo link. If no link is provided, only the description will be shown.").optional()
}