import { z } from "zod"

export const inputParamsSchema = {
  "NewsletterID": z.string().regex(new RegExp("^[\\d]{10,18}@newsletter$")).describe("Newsletter ID"),
  "name": z.string().optional(),
  "description": z.string().optional(),
  "newsletter_pic": z.string().describe("Newsletter jpeg picture in base64 format").optional(),
  "reactions": z.enum(["all","basic","blocklist","none"]).describe("Available reactions").optional()
}