import { z } from "zod"

export const inputParamsSchema = {
  "burpRequestBase64": z.string().min(1),
  "burpResponseBase64": z.string().min(1),
  "finding": z.number().int().nullable().optional()
}