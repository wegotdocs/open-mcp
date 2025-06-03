import { z } from "zod"

export const inputParamsSchema = {
  "ticketId": z.string(),
  "noteId": z.string()
}