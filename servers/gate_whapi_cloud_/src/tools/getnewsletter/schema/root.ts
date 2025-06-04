import { z } from "zod"

export const inputParamsSchema = {
  "NewsletterID": z.string().regex(new RegExp("^[\\d]{10,18}@newsletter$")).describe("Newsletter ID"),
  "user role": z.enum(["subscriber","admin","guest","owner"]).describe("User's role regarding the newsletter").optional()
}