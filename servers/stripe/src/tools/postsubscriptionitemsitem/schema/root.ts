import { z } from "zod"

export const inputParamsSchema = {
  "item": z.string().max(5000)
}