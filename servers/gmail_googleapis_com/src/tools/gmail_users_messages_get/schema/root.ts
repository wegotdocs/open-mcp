import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "id": z.string().describe("The ID of the message to retrieve. This ID is usually retrieved using `messages.list`. The ID is also contained in the result when a message is inserted (`messages.insert`) or imported (`messages.import`)."),
  "format": z.enum(["minimal","full","raw","metadata"]).describe("The format to return the message in.").optional(),
  "metadataHeaders": z.array(z.string()).describe("When given and format is `METADATA`, only include headers specified.").optional()
}