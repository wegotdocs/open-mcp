import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().optional(),
  "documentId": z.string().uuid(),
  "parentCommentId": z.string().uuid().optional(),
  "data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `data` to the tool, first call the tool `expandSchema` with \"/properties/data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The body of the comment.</property-description>").optional(),
  "text": z.string().describe("The body of the comment in markdown.").optional()
}