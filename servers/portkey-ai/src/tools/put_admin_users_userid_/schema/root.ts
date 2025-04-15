import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string(),
  "role": z.enum(["admin","member"]).optional()
}