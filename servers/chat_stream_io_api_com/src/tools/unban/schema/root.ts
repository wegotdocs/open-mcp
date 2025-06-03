import { z } from "zod"

export const inputParamsSchema = {
  "target_user_id": z.string(),
  "channel_cid": z.string().optional(),
  "created_by": z.string().optional()
}