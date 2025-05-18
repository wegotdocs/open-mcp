import { z } from "zod"

export const inputParamsSchema = {
  "note": z.string().describe("A user-generated note for this item.").optional(),
  "videoId": z.string().describe("The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request.").optional(),
  "videoPublishedAt": z.string().datetime({ offset: true }).describe("The date and time that the video was published to YouTube.").optional()
}