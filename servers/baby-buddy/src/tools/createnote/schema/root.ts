import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly().optional(),
  "child": z.number().int(),
  "note": z.string(),
  "image": z.string().base64().nullable().optional(),
  "time": z.string().datetime({ offset: true }).optional(),
  "tags": z.array(z.string()).optional()
}