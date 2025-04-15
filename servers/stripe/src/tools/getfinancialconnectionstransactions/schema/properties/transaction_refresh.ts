import { z } from "zod"

export const inputParamsSchema = {
  "after": z.string().max(5000)
}