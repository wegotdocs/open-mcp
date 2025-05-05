import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "password": z.string().min(1).max(128)
}