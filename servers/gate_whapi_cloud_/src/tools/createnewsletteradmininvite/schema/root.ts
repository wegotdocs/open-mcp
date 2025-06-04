import { z } from "zod"

export const inputParamsSchema = {
  "NewsletterID": z.string().regex(new RegExp("^[\\d]{10,18}@newsletter$")).describe("Newsletter ID"),
  "ContactID": z.string().regex(new RegExp("^([\\d]{7,15})?$")).describe("Contact ID"),
  "message": z.string().describe("Additional text to invitation").optional()
}