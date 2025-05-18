import { z } from "zod"

export const inputParamsSchema = {
  "likes": z.string().describe("The ID of the playlist that contains the channel\"s liked videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.").optional(),
  "uploads": z.string().describe("The ID of the playlist that contains the channel\"s uploaded videos. Use the videos.insert method to upload new videos and the videos.delete method to delete previously uploaded videos.").optional()
}