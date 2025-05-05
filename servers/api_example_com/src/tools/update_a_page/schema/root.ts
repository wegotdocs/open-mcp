import { z } from "zod"

export const inputParamsSchema = {
  "pageId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "title": z.string().min(1).max(512).optional(),
  "content": z.string().max(1048576).optional(),
  "order": z.number().int().optional(),
  "category": z.string().min(1).max(128).optional()
}