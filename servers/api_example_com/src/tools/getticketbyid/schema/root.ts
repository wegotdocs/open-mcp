import { z } from "zod"

export const inputParamsSchema = {
  "ticketId": z.number().int()
}