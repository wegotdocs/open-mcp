import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter specifies the thirdPartyLink resource parts that the API response will include. Supported values are linkingToken, status, and snippet."),
  "externalChannelId": z.string().describe("Channel ID to which changes should be applied, for delegation.").optional(),
  "linkingToken": z.string().describe("Get a third party link with the given linking token.").optional(),
  "type": z.enum(["linkUnspecified","channelToStoreLink"]).describe("Get a third party link of the given type.").optional()
}