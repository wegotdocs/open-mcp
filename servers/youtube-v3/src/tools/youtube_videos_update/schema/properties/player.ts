import { z } from "zod"

export const inputParamsSchema = {
  "embedHeight": z.string().optional(),
  "embedHtml": z.string().describe("An <iframe> tag that embeds a player that will play the video.").optional(),
  "embedWidth": z.string().describe("The embed width").optional()
}