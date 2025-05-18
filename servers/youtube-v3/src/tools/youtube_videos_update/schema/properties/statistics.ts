import { z } from "zod"

export const inputParamsSchema = {
  "commentCount": z.string().describe("The number of comments for the video.").optional(),
  "dislikeCount": z.string().describe("The number of users who have indicated that they disliked the video by giving it a negative rating.").optional(),
  "likeCount": z.string().describe("The number of users who have indicated that they liked the video by giving it a positive rating.").optional(),
  "viewCount": z.string().describe("The number of times the video has been viewed.").optional()
}