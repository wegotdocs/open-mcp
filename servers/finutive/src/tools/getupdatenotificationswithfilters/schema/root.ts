import { z } from "zod"

export const inputParamsSchema = {
  "updateNotificationId": z.string().optional(),
  "search": z.string().optional()
}