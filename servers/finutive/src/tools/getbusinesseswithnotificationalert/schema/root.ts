import { z } from "zod"

export const inputParamsSchema = {
  "updateNotificationId": z.string(),
  "search": z.string().optional(),
  "page": z.number().int(),
  "size": z.number().int()
}