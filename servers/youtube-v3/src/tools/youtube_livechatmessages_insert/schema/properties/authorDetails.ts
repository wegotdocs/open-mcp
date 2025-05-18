import { z } from "zod"

export const inputParamsSchema = {
  "channelId": z.string().describe("The YouTube channel ID.").optional(),
  "channelUrl": z.string().describe("The channel's URL.").optional(),
  "displayName": z.string().describe("The channel's display name.").optional(),
  "isChatModerator": z.boolean().describe("Whether the author is a moderator of the live chat.").optional(),
  "isChatOwner": z.boolean().describe("Whether the author is the owner of the live chat.").optional(),
  "isChatSponsor": z.boolean().describe("Whether the author is a sponsor of the live chat.").optional(),
  "isVerified": z.boolean().describe("Whether the author's identity has been verified by YouTube.").optional(),
  "profileImageUrl": z.string().describe("The channels's avatar URL.").optional()
}