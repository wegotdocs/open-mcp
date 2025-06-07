import { z } from "zod"

export const inputParamsSchema = {
  "max_tables": z.number().int().optional()
}