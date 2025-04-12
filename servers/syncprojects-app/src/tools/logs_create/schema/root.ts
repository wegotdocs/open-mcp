import { z } from "zod"

export const inputParams = {
  "id": z.number().int().readonly(),
  "user": z.number().int().readonly(),
  "date": z.string().datetime({ offset: true }).optional(),
  "log_compressed": z.string().readonly()
}