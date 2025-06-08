import { z } from "zod"

export const inputParamsSchema = {
  "Parameters": z.string().optional(),
  "chat_id": z.union([z.number().int(), z.string()]),
  "from_chat_id": z.union([z.number().int(), z.string()]),
  "disable_notification": z.boolean().optional(),
  "message_id": z.number().int()
}