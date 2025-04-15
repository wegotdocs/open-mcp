import { z } from "zod"

export const inputParamsSchema = {
  "session": z.string(),
  "isOffline": z.boolean().optional()
}