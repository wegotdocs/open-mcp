import { z } from "zod"

export const inputParamsSchema = {
  "Address": z.string().optional()
}