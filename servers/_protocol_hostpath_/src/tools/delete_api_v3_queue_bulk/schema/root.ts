import { z } from "zod"

export const inputParamsSchema = {
  "removeFromClient": z.boolean().optional(),
  "blocklist": z.boolean().optional(),
  "skipRedownload": z.boolean().optional(),
  "changeCategory": z.boolean().optional(),
  "ids": z.array(z.number().int()).nullable().optional()
}