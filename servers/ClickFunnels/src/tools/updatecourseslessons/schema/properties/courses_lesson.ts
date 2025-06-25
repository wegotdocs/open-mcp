import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().describe("Title").optional(),
  "body": z.union([z.string().describe("Description"), z.null().describe("Description")]).describe("Description").optional()
}