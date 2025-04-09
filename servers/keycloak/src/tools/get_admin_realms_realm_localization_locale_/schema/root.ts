import { z } from "zod"

export const inputParams = {
  "locale": z.string(),
  "useRealmDefaultLocaleFallback": z.boolean().optional()
}