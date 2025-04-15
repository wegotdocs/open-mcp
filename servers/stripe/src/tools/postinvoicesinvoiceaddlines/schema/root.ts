import { z } from "zod"

export const inputParamsSchema = {
  "invoice": z.string().max(5000)
}