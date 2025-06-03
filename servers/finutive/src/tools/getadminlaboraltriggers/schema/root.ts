import { z } from "zod"

export const inputParamsSchema = {
  "businesses": z.string().optional()
}