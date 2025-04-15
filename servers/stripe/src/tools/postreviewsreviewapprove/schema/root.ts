import { z } from "zod"

export const inputParamsSchema = {
  "review": z.string().max(5000)
}