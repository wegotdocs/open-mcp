import { z } from "zod"

export const inputParamsSchema = {
  "prompt": z.string().min(1),
  "model": z.string().min(1),
  "response_format": z.enum(["url","b64_json"]).optional(),
  "quality": z.enum(["auto","low","medium","high"]).optional()
}