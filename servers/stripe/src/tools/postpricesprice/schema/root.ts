import { z } from "zod"

export const inputParamsSchema = {
  "price": z.string().max(5000)
}