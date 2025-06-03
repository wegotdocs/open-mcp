import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "name": z.string().optional(),
  "url": z.string().optional(),
  "type": z.enum(["VIDEO","IMAGE","AUDIO","DOCUMENT","OTHER"]).optional()
}