import { z } from "zod"

export const inputParamsSchema = {
  "blockchain": z.string(),
  "address": z.string(),
  "title": z.string().optional(),
  "description": z.string().optional(),
  "image_uri": z.string().optional()
}