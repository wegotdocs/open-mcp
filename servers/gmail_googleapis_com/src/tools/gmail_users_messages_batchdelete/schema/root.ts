import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "ids": z.array(z.string()).describe("The IDs of the messages to delete.").optional()
}