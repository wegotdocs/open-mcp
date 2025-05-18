import { z } from "zod"

export const inputParamsSchema = {
  "linkingToken": z.string().describe("Delete the partner links with the given linking token."),
  "type": z.enum(["linkUnspecified","channelToStoreLink"]).describe("Type of the link to be deleted."),
  "externalChannelId": z.string().describe("Channel ID to which changes should be applied, for delegation.").optional(),
  "part": z.array(z.string()).describe("Do not use. Required for compatibility.").optional()
}