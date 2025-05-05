import { z } from "zod"

export const inputParamsSchema = {
  "shareId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "profile": z.string().min(1).max(64)
}