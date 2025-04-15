import { z } from "zod"

export const inputParamsSchema = {
  "location": z.string().max(5000)
}