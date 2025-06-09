import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "locale": z.string().optional()
}