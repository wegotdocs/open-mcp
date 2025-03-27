import { z } from "zod";
export const toolName = `gists_unstar`;
export const toolDescription = `Unstar a gist`;
export const baseUrl = `https://api.github.com`;
export const path = `/gists/{gist_id}/star`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "gist_id": z.string().describe("The unique identifier of the gist.") }).optional() }).shape;
