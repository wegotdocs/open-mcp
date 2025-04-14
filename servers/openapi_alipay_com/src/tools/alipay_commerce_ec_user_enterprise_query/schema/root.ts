import { z } from "zod"

export const inputParams = {
  "user_id": z.string().describe("用户id").optional(),
  "open_id": z.string().describe("用户open_id").optional()
}