import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(3).max(25).describe("Update user name.").optional(),
  "about": z.string().min(1).max(139).describe("Update user info in About section.").optional(),
  "icon": z.string().describe("Update user icon in base64/url.").optional()
}