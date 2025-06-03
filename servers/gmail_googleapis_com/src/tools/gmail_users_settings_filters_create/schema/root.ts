import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User's email address. The special value \"me\" can be used to indicate the authenticated user."),
  "action": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `action` to the tool, first call the tool `expandSchema` with \"/properties/action\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Action that the filter performs.</property-description>").optional(),
  "criteria": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `criteria` to the tool, first call the tool `expandSchema` with \"/properties/criteria\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Matching criteria for the filter.</property-description>").optional(),
  "id": z.string().describe("The server assigned ID of the filter.").optional()
}