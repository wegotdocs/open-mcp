import { z } from "zod"

export const inputParams = {
  "userId": z.string(),
  "role": z.enum(["admin","member"]).optional()
}