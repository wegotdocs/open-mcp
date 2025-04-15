import { z } from "zod"

export const inputParamsSchema = {
  "payout": z.string().max(5000)
}