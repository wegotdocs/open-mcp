import { z } from "zod";
export const inputParams = {
    "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional(),
    "offset": z.number().int().describe("'The index of the first playlist to return. Default:\n0 (the first object). Maximum offset: 100.000\\. Use with `limit` to get the\nnext set of playlists.'\n").optional()
};
