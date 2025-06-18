import { z } from "zod"

export const inputParamsSchema = {
  "session_token": z.union([z.string(), z.null()]).optional()
}