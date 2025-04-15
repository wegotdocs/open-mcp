import { z } from "zod"

export const inputParamsSchema = {
  "schedule": z.string().max(5000)
}