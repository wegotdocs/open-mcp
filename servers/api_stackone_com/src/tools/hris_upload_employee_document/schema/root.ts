import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "name": z.string().nullable().describe("The filename of the file to upload").optional(),
  "file_format": z.string().optional(),
  "content": z.string().nullable().describe("The base64 encoded content of the file to upload").optional(),
  "category_id": z.string().nullable().describe("The categoryId of the documents").optional(),
  "path": z.string().nullable().describe("The path for the file to be uploaded to").optional(),
  "category": z.string().optional(),
  "confidential": z.string().optional(),
  "x-account-id": z.string().describe("The account identifier")
}