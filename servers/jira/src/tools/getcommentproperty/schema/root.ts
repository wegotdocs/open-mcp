import { z } from "zod"

export const inputParamsSchema = {
  "commentId": z.string().describe("The ID of the comment."),
  "propertyKey": z.string().describe("The key of the property.")
}