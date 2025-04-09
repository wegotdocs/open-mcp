import { z } from "zod";
export const inputParams = {
    "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"),
    "public": z.boolean().describe("Defaults to `true`. If `true` the playlist will be included in user's public playlists (added to profile), if `false` it will remain private. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)\n").optional()
};
