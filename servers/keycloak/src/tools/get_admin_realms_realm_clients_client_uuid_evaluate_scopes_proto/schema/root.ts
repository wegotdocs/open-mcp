import { z } from "zod"

export const inputParamsSchema = {
  "scope": z.string().optional()
}