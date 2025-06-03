import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "team": z.string().optional()
}