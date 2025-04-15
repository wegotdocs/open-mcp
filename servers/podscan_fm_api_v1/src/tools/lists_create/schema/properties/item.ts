import { z } from "zod"

export const inputParams = {
  "type": z.enum(["Podcast","PodcastEpisode","Alert","Mention","Topic"]).optional(),
  "id": z.string().optional()
}