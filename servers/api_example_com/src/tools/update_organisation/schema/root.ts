import { z } from "zod"

export const inputParamsSchema = {
  "orgId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "name": z.string().min(1).max(64).optional(),
  "description": z.string().max(1048576).optional(),
  "taskRule": z.string().min(1).max(64).optional(),
  "observableRule": z.string().min(1).max(64).optional(),
  "locked": z.boolean().optional(),
  "avatar": z.string().optional()
}