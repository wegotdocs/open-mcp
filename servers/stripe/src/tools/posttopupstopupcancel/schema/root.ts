import { z } from "zod"

export const inputParamsSchema = {
  "topup": z.string().max(5000)
}