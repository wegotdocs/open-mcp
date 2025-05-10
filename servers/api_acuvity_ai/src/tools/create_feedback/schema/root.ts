import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "comment": z.string().describe("General comments on the feedback.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "key": z.string().describe("The key of the feedback."),
  "logHash": z.string().describe("The hash of the log."),
  "logUnixNano": z.string().describe("The timestamp of the log."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "principal": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `principal` to the tool, first call the tool `expandSchema` with \"/properties/principal\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Describe the principal.</property-description>"),
  "provider": z.string().describe("The provider of the feedback."),
  "score": z.number().int().describe("The feedback score (+1 for upvote, -1 for downvote).").optional(),
  "status": z.enum(["New","Investigating","Confirmed","Rejected"]).describe("The status of the feedback."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "value": z.string().describe("The value of the feedback.")
}