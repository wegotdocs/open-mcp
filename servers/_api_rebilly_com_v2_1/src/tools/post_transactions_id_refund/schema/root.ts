import { z } from "zod"

export const inputParamsSchema = {
  "amount": z.number().describe("Refund amount")
}