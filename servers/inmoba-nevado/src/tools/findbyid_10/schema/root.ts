import { z } from "zod"

export const inputParamsSchema = {
  "eventId": z.number().int()
}