import { z } from "zod"

export const inputParamsSchema = {
  "banDurationSeconds": z.string().describe("The duration of a ban, only filled if the ban has type TEMPORARY.").optional(),
  "bannedUserDetails": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `bannedUserDetails` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/bannedUserDetails\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "liveChatId": z.string().describe("The chat this ban is pertinent to.").optional(),
  "type": z.enum(["liveChatBanTypeUnspecified","permanent","temporary"]).describe("The type of ban.").optional()
}