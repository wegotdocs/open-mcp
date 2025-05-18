import { z } from "zod"

export const inputParamsSchema = {
  "commentCount": z.string().describe("The number of comments for the channel.").optional(),
  "hiddenSubscriberCount": z.boolean().describe("Whether or not the number of subscribers is shown for this user.").optional(),
  "subscriberCount": z.string().describe("The number of subscribers that the channel has.").optional(),
  "videoCount": z.string().describe("The number of videos uploaded to the channel.").optional(),
  "viewCount": z.string().describe("The number of times the channel has been viewed.").optional()
}