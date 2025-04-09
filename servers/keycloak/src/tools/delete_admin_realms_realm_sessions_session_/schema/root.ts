import { z } from "zod"

export const inputParams = {
  "session": z.string(),
  "isOffline": z.boolean().optional()
}