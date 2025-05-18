import { z } from "zod"

export const inputParamsSchema = {
  "itemCount": z.number().int().describe("The number of videos in the playlist.").optional()
}