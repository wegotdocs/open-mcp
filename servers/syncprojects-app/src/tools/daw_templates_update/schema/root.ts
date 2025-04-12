import { z } from "zod"

export const inputParams = {
  "id": z.string(),
  "project": z.number().int(),
  "name": z.string(),
  "upload_url": z.string().readonly(),
  "b_id": z.number().int().readonly()
}