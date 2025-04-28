import { z } from "zod"

export const inputParamsSchema = {
  "media_id": z.number().int(),
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "activation_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "expiration_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "partner_media_id": z.union([z.number().int(), z.null()]).optional(),
  "content": z.union([z.string(), z.null()]).optional(),
  "content_source": z.union([z.string(), z.null()]).optional(),
  "extra_content": z.union([z.record(z.any()), z.null()]).optional(),
  "argument": z.union([z.record(z.any()), z.null()]).optional(),
  "fore_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #E63131FF").optional(),
  "back_color": z.union([z.string(), z.null()]).describe("#RGBA. Ex: #F0E596FF").optional(),
  "font_prop": z.union([z.record(z.any()), z.null()]).optional(),
  "width": z.union([z.number().int(), z.null()]).describe("Expected width (pixels). Only for thumbnail creation.").optional(),
  "height": z.union([z.number().int(), z.null()]).describe("Expected height (pixels). Only for thumbnail creation.").optional()
}