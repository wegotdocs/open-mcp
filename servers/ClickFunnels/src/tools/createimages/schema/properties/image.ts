import { z } from "zod"

export const inputParamsSchema = {
  "alt_text": z.union([z.string().describe("Image alt attribute"), z.null().describe("Image alt attribute")]).describe("Image alt attribute").optional(),
  "name": z.union([z.string().describe("Image name"), z.null().describe("Image name")]).describe("Image name").optional(),
  "upload_source_url": z.string().describe("The source URL of the image that you want to upload. Not required on Update when not needed to re-upload the image.")
}