import { z } from "zod"

export const inputParamsSchema = {
  "search": z.number().optional()
}