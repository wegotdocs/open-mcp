import { z } from "zod";
export const inputParams = {
    "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.\n")
};
