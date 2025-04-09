import { z } from "zod"

export const inputParams = {
  "commentId": z.string().describe("The ID of the comment.")
}