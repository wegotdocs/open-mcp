import { z } from "zod"

export const inputParamsSchema = {
  "commentId": z.string().describe("The ID of the comment.")
}