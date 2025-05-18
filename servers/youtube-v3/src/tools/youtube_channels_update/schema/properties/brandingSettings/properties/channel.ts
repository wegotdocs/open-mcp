import { z } from "zod"

export const inputParamsSchema = {
  "country": z.string().describe("The country of the channel.").optional(),
  "defaultLanguage": z.string().optional(),
  "description": z.string().describe("Specifies the channel description.").optional(),
  "keywords": z.string().describe("Lists keywords associated with the channel, comma-separated.").optional(),
  "moderateComments": z.boolean().describe("Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible.").optional(),
  "title": z.string().describe("Specifies the channel title.").optional(),
  "trackingAnalyticsAccountId": z.string().describe("The ID for a Google Analytics account to track and measure traffic to the channels.").optional(),
  "unsubscribedTrailer": z.string().describe("The trailer of the channel, for users that are not subscribers.").optional()
}