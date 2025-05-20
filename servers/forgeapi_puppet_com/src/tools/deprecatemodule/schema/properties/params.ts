import { z } from "zod"

export const inputParamsSchema = {
  "reason": z.string().nullable().describe("Reason for deprecation").optional(),
  "replacement_slug": z.string().regex(new RegExp("^[a-zA-Z0-9]+[-\\/][a-zA-Z][a-zA-Z0-9_]*$")).nullable().describe("Slug identifying a replacement Module. Accepts legacy (case-sensitive) module naming.").optional()
}