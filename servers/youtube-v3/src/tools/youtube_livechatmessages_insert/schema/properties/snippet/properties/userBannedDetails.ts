import { z } from "zod"

export const inputParamsSchema = {
  "banDurationSeconds": z.string().describe("The duration of the ban. This property is only present if the banType is temporary.").optional(),
  "banType": z.enum(["permanent","temporary"]).describe("The type of ban.").optional(),
  "bannedUserDetails": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `bannedUserDetails` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/userBannedDetails/properties/bannedUserDetails\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The details of the user that was banned.</property-description>").optional()
}