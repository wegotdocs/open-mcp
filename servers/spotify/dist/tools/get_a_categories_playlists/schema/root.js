import { z } from "zod";
export const inputParams = {
    "category_id": z.string().describe("The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.\n"),
    "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
    "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n").optional()
};
