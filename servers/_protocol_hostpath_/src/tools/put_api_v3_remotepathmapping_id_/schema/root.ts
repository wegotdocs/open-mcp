import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "host": z.string().nullable().optional(),
  "remotePath": z.string().nullable().optional(),
  "localPath": z.string().nullable().optional()
}