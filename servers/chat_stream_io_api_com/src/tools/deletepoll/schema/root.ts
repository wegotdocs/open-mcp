import { z } from "zod"

export const inputParamsSchema = {
  "poll_id": z.string().max(255).describe("Poll ID"),
  "user_id": z.string().optional()
}