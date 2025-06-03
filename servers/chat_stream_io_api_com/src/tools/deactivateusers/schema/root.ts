import { z } from "zod"

export const inputParamsSchema = {
  "created_by_id": z.string().describe("ID of the user who deactivated the users").optional(),
  "mark_channels_deleted": z.boolean().optional(),
  "mark_messages_deleted": z.boolean().describe("Makes messages appear to be deleted").optional(),
  "user_ids": z.array(z.string()).describe("User IDs to deactivate")
}