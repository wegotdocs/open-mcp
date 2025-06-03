import { z } from "zod"

export const inputParamsSchema = {
  "message_id": z.string(),
  "poll_id": z.string().max(255).describe("Poll ID"),
  "vote_id": z.string().max(255).describe("Vote ID"),
  "user_id": z.string().optional()
}