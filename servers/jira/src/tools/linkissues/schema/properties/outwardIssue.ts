import { z } from "zod"

export const inputParamsSchema = {
  "fields": z.string().optional(),
  "id": z.string().describe("The ID of an issue. Required if `key` isn't provided.").optional(),
  "key": z.string().describe("The key of an issue. Required if `id` isn't provided.").optional(),
  "self": z.string().url().describe("The URL of the issue.").readonly().optional()
}