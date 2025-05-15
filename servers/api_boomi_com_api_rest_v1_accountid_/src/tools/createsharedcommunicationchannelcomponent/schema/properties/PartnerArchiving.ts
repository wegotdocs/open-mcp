import { z } from "zod"

export const inputParamsSchema = {
  "enableArchiving": z.boolean().optional(),
  "inboundDirectory": z.string().optional(),
  "outboundDirectory": z.string().optional()
}