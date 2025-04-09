import { z } from "zod"

export const inputParams = {
  "type": z.enum(["artist","user"]).describe("The ID type: either `artist` or `user`.\n"),
  "ids": z.string().describe("A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) to check. For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.\n")
}