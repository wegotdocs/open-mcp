import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "url": z.string().url(),
  "icon": z.string().nullable().optional(),
  "position": z.number().int().optional(),
  "is_private": z.boolean().optional()
}