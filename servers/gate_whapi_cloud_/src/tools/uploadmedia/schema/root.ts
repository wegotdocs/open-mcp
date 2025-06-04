import { z } from "zod"

export const inputParamsSchema = {
  "no_encode": z.boolean().describe("Do not use our encoding").optional(),
  "media": z.union([z.string().base64().describe("File to upload"), z.string().describe("Media file URL for upload"), z.string().describe("Base64 encoded file to upload")]).optional()
}