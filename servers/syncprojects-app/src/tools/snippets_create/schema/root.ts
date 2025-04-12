import { z } from "zod"

export const inputParams = {
  "project": z.number().int(),
  "name": z.string(),
  "upload_url": z.string().readonly(),
  "id": z.number().int().readonly()
}