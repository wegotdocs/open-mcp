import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().regex(new RegExp("^[a-zA-Z][a-zA-Z0-9\\-_]*$")).min(1).max(48),
  "description": z.string().max(64).optional(),
  "privacy": z.enum(["public","unlisted","private"])
}