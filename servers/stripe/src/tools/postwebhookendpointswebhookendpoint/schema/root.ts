import { z } from "zod"

export const inputParamsSchema = {
  "webhook_endpoint": z.string().max(5000)
}