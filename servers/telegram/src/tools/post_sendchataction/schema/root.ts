import { z } from "zod"

export const inputParamsSchema = {
  "Parameters": z.string().optional(),
  "chat_id": z.union([z.number().int(), z.string()]),
  "action": z.string()
}