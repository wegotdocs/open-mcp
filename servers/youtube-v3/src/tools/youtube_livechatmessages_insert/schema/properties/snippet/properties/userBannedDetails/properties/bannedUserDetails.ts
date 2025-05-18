import { z } from "zod"

export const inputParamsSchema = {
  "channelId": z.string().describe("The YouTube channel ID.").optional(),
  "channelUrl": z.string().describe("The channel's URL.").optional(),
  "displayName": z.string().describe("The channel's display name.").optional(),
  "profileImageUrl": z.string().describe("The channels's avatar URL.").optional()
}