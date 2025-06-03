import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string(),
  "created_by_id": z.string().describe("ID of the user who deactivated the user").optional(),
  "mark_messages_deleted": z.boolean().describe("Makes messages appear to be deleted").optional()
}