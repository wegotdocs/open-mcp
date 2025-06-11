import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid(),
  "groupId": z.string().uuid(),
  "permission": z.enum(["read","read_write"]).optional()
}