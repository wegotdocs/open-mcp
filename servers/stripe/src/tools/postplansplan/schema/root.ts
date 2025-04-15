import { z } from "zod"

export const inputParamsSchema = {
  "plan": z.string().max(5000)
}