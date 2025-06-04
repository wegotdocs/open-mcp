import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User's email address. The special value \"me\" can be used to indicate the authenticated user."),
  "delegateEmail": z.string().describe("The email address of the user to be removed as a delegate.")
}