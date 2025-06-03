import { z } from "zod"

export const inputParamsSchema = {
  "message_id": z.string(),
  "reply_limit": z.number().int().gte(0).describe("Limit the number of replies returned").optional(),
  "participant_limit": z.number().int().gte(0).lte(100).describe("Limit the number of participants returned").optional(),
  "member_limit": z.number().int().gte(0).lte(100).describe("Limit the number of members returned per thread channel").optional()
}