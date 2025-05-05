import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(64),
  "displayName": z.string().min(1).max(64).optional(),
  "group": z.string().min(1).max(64),
  "description": z.string().max(1048576),
  "type": z.enum(["string","integer","float","boolean","date","url"]),
  "mandatory": z.boolean().optional(),
  "options": z.array(z.any()).optional()
}