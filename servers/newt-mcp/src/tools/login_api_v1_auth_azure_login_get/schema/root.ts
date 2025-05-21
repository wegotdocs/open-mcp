import { z } from "zod"

export const inputParamsSchema = {
  "next": z.string().optional()
}