import { z } from "zod"

export const inputParamsSchema = {
  "Accept": z.string().optional()
}