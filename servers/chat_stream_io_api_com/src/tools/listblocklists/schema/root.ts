import { z } from "zod"

export const inputParamsSchema = {
  "team": z.string().optional()
}