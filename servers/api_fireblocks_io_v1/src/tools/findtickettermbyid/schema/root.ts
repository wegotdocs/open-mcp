import { z } from "zod"

export const inputParamsSchema = {
  "ticketId": z.string(),
  "termId": z.string()
}