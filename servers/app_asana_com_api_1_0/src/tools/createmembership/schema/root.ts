import { z } from "zod"

export const inputParamsSchema = {
  "data": z.string().optional()
}