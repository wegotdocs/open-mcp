import { z } from "zod"

export const inputParamsSchema = {
  "embedHtml": z.string().describe("An <iframe> tag that embeds a player that will play the playlist.").optional()
}