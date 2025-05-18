import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet."),
  "externalChannelId": z.string().describe("Channel ID to which changes should be applied, for delegation.").optional(),
  "etag": z.string().describe("Etag of this resource").optional(),
  "kind": z.string().describe("Identifies what kind of resource this is. Value: the fixed string \"youtube#thirdPartyLink\".").optional(),
  "linkingToken": z.string().describe("The linking_token identifies a YouTube account and channel with which the third party account is linked.").optional(),
  "snippet": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `snippet` to the tool, first call the tool `expandSchema` with \"/properties/snippet\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The snippet object contains basic details about the third- party account link.</property-description>").optional(),
  "status": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `status` to the tool, first call the tool `expandSchema` with \"/properties/status\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The status object contains information about the status of the link.</property-description>").optional()
}