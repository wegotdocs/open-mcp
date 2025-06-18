import { z } from "zod"

export const inputParamsSchema = {
  "code": z.string(),
  "state": z.union([z.string(), z.null()]).optional()
}