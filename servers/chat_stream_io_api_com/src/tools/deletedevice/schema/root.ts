import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Device ID to delete"),
  "user_id": z.string().describe("**Server-side only**. User ID which server acts upon").optional()
}