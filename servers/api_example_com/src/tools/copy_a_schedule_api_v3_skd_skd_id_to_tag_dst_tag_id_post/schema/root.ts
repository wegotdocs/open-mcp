import { z } from "zod"

export const inputParamsSchema = {
  "skd_id": z.number().int(),
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional()
}