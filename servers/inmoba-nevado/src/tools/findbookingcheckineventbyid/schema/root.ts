import { z } from "zod"

export const inputParamsSchema = {
  "bookingId": z.number().int()
}