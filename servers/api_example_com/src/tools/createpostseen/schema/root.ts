import { z } from "zod"

export const inputParamsSchema = {
  "postId": z.string().uuid(),
  "seen_at": z.string().datetime({ offset: true }).nullable().describe("The point in time when the user has viewed the post (default: now). If specified, it has to be a time in the past.").optional(),
  "user_id": z.string().uuid().nullable().describe("The id of the user for who the seen is created (default: current actor). If a user other than the current actor is specified, the current actor requires the legacy permission `POST_COMMENTS_IMPERSONATE`.").optional()
}