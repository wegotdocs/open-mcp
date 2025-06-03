import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Payment institution primary identifier")
}