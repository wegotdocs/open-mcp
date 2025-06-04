import { z } from "zod"

export const inputParamsSchema = {
  "NewsletterID": z.string().regex(new RegExp("^[\\d]{10,18}@newsletter$")).describe("Newsletter ID")
}