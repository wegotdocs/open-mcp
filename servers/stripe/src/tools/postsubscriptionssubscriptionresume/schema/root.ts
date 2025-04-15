import { z } from "zod"

export const inputParamsSchema = {
  "subscription": z.string().max(5000)
}