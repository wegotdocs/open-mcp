import { z } from "zod"

export const inputParamsSchema = {
  "URI": z.string().optional()
}