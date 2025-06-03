import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string(),
  "created_by_id": z.string().describe("ID of the user who's reactivating the user").optional(),
  "name": z.string().describe("Set this field to put new name for the user").optional(),
  "restore_messages": z.boolean().describe("Restore previously deleted messages").optional()
}