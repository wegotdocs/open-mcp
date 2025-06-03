import { z } from "zod"

export const inputParamsSchema = {
  "created_by_id": z.string().describe("ID of the user who's reactivating the users").optional(),
  "restore_channels": z.boolean().optional(),
  "restore_messages": z.boolean().describe("Restore previously deleted messages").optional(),
  "user_ids": z.array(z.string()).describe("User IDs to reactivate")
}