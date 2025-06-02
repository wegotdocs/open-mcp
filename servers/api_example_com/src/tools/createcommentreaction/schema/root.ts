import { z } from "zod"

export const inputParamsSchema = {
  "postId": z.string().uuid(),
  "commentId": z.string().uuid(),
  "published_at": z.string().datetime({ offset: true }).nullable().describe("The point in time when the reaction was made (default: now). If specified, it has to be a time in the past.").optional(),
  "reacting_user_id": z.string().uuid().nullable().describe("The id of the user for whom the reaction is created (default: current actor). If a user other than the current actor is specified, the current actor needs the legacy permission `POST_COMMENTS_IMPERSONATE`.").optional(),
  "type": z.string()
}