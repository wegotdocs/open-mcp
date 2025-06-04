import { z } from "zod"

export const inputParamsSchema = {
  "NewsletterID": z.string().regex(new RegExp("^[\\d]{10,18}@newsletter$")).describe("Newsletter ID"),
  "count": z.number().gte(1).lte(500).describe("Count of objects to return").optional(),
  "before": z.number().gte(0).describe("Request messages before the specified one (see first and last)").optional(),
  "after": z.number().gte(0).describe("Request messages after the specified one (see first and last)").optional()
}