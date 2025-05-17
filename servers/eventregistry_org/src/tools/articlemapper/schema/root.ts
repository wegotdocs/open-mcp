import { z } from "zod"

export const inputParamsSchema = {
  "apiKey": z.string().describe("Your API key"),
  "articleUrl": z.string().describe("Define the requested article URL."),
  "includeAllVersions": z.boolean().describe("Set this parameter to true to include all versions of the article.").optional(),
  "deep": z.boolean().optional()
}