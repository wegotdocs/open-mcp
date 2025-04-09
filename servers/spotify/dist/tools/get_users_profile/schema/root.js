import { z } from "zod";
export const inputParams = {
    "user_id": z.string().describe("The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).\n")
};
