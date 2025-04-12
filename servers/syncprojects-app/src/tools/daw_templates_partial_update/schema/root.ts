import { z } from "zod"

export const inputParams = {
  "id": z.string(),
  "project": z.number().int().optional(),
  "name": z.string().optional(),
  "upload_url": z.string().readonly().optional(),
  "b_id": z.number().int().readonly().optional()
}