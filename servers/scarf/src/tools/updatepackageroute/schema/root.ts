import { z } from "zod"

export const inputParamsSchema = {
  "type": z.literal("uri-template").optional(),
  "incoming_path": z.string(),
  "outgoing_url": z.string().optional()
}