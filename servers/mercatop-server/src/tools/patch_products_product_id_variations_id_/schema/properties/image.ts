import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Image ID.").optional(),
  "date_created": z.string().describe("The date the image was created, in the site's timezone.").optional(),
  "date_created_gmt": z.string().describe("The date the image was created, as GMT.").optional(),
  "date_modified": z.string().describe("The date the image was last modified, in the site's timezone.").optional(),
  "date_modified_gmt": z.string().describe("The date the image was last modified, as GMT.").optional(),
  "src": z.string().url().describe("Image URL.").optional(),
  "name": z.string().describe("Image name.").optional(),
  "alt": z.string().describe("Image alternative text.").optional()
}