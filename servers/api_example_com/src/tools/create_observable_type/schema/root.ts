import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(64),
  "isAttachment": z.boolean().optional()
}