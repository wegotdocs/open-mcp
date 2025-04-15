import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "useRealmDefaultLocaleFallback": z.boolean().optional()
}