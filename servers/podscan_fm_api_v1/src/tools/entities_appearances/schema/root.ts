import { z } from "zod"

export const inputParams = {
  "entityId": z.string(),
  "role": z.string().optional(),
  "podcast_id": z.string().optional(),
  "from": z.string().optional(),
  "to": z.string().optional()
}