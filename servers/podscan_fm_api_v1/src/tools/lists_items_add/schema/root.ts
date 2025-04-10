import { z } from "zod"

export const inputParams = {
  "team": z.string().describe("The ID of the team"),
  "list": z.string().describe("The ID of the list"),
  "type": z.enum(["Podcast","PodcastEpisode","Alert","Mention","Topic","Entity"]),
  "id": z.string()
}