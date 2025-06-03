import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Payment request primary identifier"),
  "scheduleId": z.string().uuid().describe("Payment schedule primary identifier")
}