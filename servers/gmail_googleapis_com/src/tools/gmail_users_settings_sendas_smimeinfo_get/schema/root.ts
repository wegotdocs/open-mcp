import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "sendAsEmail": z.string().describe("The email address that appears in the \"From:\" header for mail sent using this alias."),
  "id": z.string().describe("The immutable ID for the SmimeInfo.")
}