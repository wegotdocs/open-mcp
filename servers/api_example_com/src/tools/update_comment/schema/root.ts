import { z } from "zod"

export const inputParamsSchema = {
  "commentId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "message": z.string().max(1048576)
}