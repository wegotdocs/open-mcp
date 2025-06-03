import { z } from "zod"

export const inputParamsSchema = {
  "media_queue_blur_enabled": z.boolean().optional()
}