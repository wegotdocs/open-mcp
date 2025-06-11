import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid(),
  "userId": z.string().uuid(),
  "permission": z.enum(["read","read_write"]).optional()
}