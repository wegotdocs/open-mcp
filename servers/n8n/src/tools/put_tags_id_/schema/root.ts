import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the tag."),
  "b_id": z.string().readonly().optional(),
  "name": z.string(),
  "createdAt": z.string().datetime({ offset: true }).readonly().optional(),
  "updatedAt": z.string().datetime({ offset: true }).readonly().optional()
}