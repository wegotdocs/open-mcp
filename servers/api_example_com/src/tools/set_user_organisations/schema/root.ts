import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "organisations": z.array(z.object({ "organisation": z.string().min(1).max(128), "profile": z.string().min(1).max(64), "default": z.boolean().optional() })).optional()
}