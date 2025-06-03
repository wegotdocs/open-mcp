import { z } from "zod"

export const inputParamsSchema = {
  "notification_id": z.string(),
  "closeDate": z.string().datetime({ offset: true }),
  "actualUser": z.string()
}