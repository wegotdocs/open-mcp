import { z } from "zod"

export const inputParamsSchema = {
  "inputs": z.string().optional()
}