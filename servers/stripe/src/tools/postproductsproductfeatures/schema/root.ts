import { z } from "zod"

export const inputParamsSchema = {
  "product": z.string().max(5000)
}