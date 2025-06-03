import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().describe("**Server-side only**. User ID which server acts upon").optional()
}