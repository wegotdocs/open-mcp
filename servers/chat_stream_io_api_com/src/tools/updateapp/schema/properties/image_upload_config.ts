import { z } from "zod"

export const inputParamsSchema = {
  "allowed_file_extensions": z.array(z.string()).optional(),
  "allowed_mime_types": z.array(z.string()).optional(),
  "blocked_file_extensions": z.array(z.string()).optional(),
  "blocked_mime_types": z.array(z.string()).optional(),
  "size_limit": z.number().int().gte(0).lte(104857600)
}