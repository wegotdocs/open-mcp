import { z } from "zod"

export const inputParamsSchema = {
  "height": z.number().int().describe("The image height.").optional(),
  "playlistId": z.string().describe("The Playlist ID of the playlist this image is associated with.").optional(),
  "type": z.literal("hero").describe("The image type.").optional(),
  "width": z.number().int().describe("The image width.").optional()
}