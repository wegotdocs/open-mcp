import { z } from "zod"

export const inputParamsSchema = {
  "customer": z.string().max(5000)
}