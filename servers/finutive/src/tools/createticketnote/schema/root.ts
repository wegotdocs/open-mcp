import { z } from "zod"

export const inputParamsSchema = {
  "ticketId": z.string(),
  "text": z.string().optional(),
  "docs": z.array(z.string()).optional()
}