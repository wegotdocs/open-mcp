import { z } from "zod"

export const inputParamsSchema = {
  "file": z.string().optional()
}