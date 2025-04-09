import { z } from "zod";
export const inputParams = {
    "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n")
};
