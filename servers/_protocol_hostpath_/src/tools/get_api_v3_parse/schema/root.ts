import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().optional()
}