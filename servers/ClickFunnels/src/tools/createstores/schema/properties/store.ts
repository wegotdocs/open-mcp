import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name"),
  "current_path": z.union([z.string().describe("Current path"), z.null().describe("Current path")]).describe("Current path").optional(),
  "seo_title": z.union([z.string().describe("SEO title"), z.null().describe("SEO title")]).describe("SEO title").optional(),
  "seo_description": z.union([z.string().describe("SEO description"), z.null().describe("SEO description")]).describe("SEO description").optional(),
  "seo_indexable": z.union([z.boolean().describe("SEO Indexable"), z.null().describe("SEO Indexable")]).describe("SEO Indexable").optional(),
  "social_image_id": z.union([z.string().describe("Social image"), z.null().describe("Social image")]).describe("Social image").optional(),
  "status": z.enum(["draft","published"]).describe("Store Status").optional()
}