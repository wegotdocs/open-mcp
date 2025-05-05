import { z } from "zod"

export const inputParamsSchema = {
  "verbose": z.boolean().optional()
}