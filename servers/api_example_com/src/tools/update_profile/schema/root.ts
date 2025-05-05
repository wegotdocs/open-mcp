import { z } from "zod"

export const inputParamsSchema = {
  "profileId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "name": z.string().min(1).max(64).optional(),
  "permissions": z.array(z.string().min(1).max(32)).optional()
}