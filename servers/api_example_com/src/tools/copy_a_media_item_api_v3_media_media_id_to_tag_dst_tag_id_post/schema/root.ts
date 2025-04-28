import { z } from "zod"

export const inputParamsSchema = {
  "media_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}