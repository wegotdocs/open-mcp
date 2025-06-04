import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "id": z.string().describe("The ID of the draft to retrieve."),
  "format": z.enum(["minimal","full","raw","metadata"]).describe("The format to return the draft in.").optional()
}