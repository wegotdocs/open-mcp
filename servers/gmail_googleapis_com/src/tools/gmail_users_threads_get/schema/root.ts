import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "id": z.string().describe("The ID of the thread to retrieve."),
  "format": z.enum(["full","metadata","minimal"]).describe("The format to return the messages in.").optional(),
  "metadataHeaders": z.array(z.string()).describe("When given and format is METADATA, only include headers specified.").optional()
}