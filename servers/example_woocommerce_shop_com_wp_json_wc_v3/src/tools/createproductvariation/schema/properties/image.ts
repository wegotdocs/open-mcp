import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Image ID.").optional(),
  "date_created": z.string().datetime({ offset: true }).describe("The date the image was created, in the site's timezone. read-only").optional(),
  "date_created_gmt": z.string().datetime({ offset: true }).describe("The date the image was created, as GMT. read-only").optional(),
  "date_modified": z.string().datetime({ offset: true }).describe("The date the image was last modified, in the site's timezone. read-only").optional(),
  "date_modified_gmt": z.string().datetime({ offset: true }).describe("The date the image was last modified, as GMT. read-only").optional(),
  "src": z.string().describe("Image URL.").optional(),
  "name": z.string().describe("Image name.").optional(),
  "alt": z.string().describe("Image alternative text.").optional()
}