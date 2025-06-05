import { z } from "zod"

export const inputParamsSchema = {
  "user_preferences": z.array(z.object({ "team_id": z.number().int(), "user_id": z.number().int(), "receive_by_email": z.boolean(), "receive_by_sms_text": z.boolean() })).optional()
}