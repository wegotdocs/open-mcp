import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "name": z.string().describe("Original File name").optional(),
  "extension": z.string().describe("The File extension").optional(),
  "description": z.string().describe("The File description").optional(),
  "url": z.string().describe("Write-only. If defined on POST, this would be used as a file source.").optional(),
  "tags": z.array(z.string()).describe("The tags list").optional(),
  "mime": z.enum(["image/png","image/jpeg","image/gif","application/pdf","audio/mpeg"]).describe("The mime type").readonly().optional(),
  "size": z.number().int().describe("The File size in bytes").readonly().optional(),
  "width": z.number().int().describe("Image width, applicable to images only").readonly().optional(),
  "height": z.number().int().describe("Image height, applicable to images only").readonly().optional(),
  "sha1": z.string().describe("Hash sum of the file").readonly().optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.union([z.string(), z.string()])).min(2).max(2).describe("The links related to resource").readonly().optional()
}