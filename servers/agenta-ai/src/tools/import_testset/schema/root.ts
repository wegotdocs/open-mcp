import { z } from "zod"

export const inputParamsSchema = {
  "authorization": z.union([z.string(), z.null()]).optional()
}