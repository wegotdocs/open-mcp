import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string(),
  "id": z.string(),
  "parent_id": z.string().describe("Parent message ID").optional(),
  "user_id": z.string().optional()
}