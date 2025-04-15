import { z } from "zod"

export const inputParamsSchema = {
  "card": z.string().max(5000)
}