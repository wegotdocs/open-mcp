import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Message ID to remove reaction from"),
  "type": z.string().describe("Reaction type to remove"),
  "user_id": z.string().describe("**Server-side only**. User ID which server acts upon").optional()
}