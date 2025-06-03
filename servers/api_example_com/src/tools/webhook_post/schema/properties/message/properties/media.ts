import { z } from "zod"

export const inputParamsSchema = {
  "mediaUri": z.string(),
  "contentType": z.string(),
  "title": z.string()
}