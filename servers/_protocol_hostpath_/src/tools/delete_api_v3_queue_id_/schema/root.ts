import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "removeFromClient": z.boolean().optional(),
  "blocklist": z.boolean().optional(),
  "skipRedownload": z.boolean().optional(),
  "changeCategory": z.boolean().optional()
}