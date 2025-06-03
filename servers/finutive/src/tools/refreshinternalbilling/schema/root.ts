import { z } from "zod"

export const inputParamsSchema = {
  "date": z.string().date().optional()
}