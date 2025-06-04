import { z } from "zod"

export const inputParamsSchema = {
  "GroupID": z.string().regex(new RegExp("^[\\d-]{10,31}@g\\.us$")).describe("Group ID"),
  "media": z.union([z.string().describe("Media file URL for upload"), z.string().describe("Base64 encoded file to upload"), z.string().describe("Media file ID")]),
  "mime_type": z.string().describe("Mime type of media").optional()
}