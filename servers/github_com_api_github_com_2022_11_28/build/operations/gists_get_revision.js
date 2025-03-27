import { z } from "zod";
export const toolName = `gists_get_revision`;
export const toolDescription = `Get a gist revision`;
export const baseUrl = `https://github.com`;
export const path = `/gists/{gist_id}/{sha}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "gist_id": z.string().describe("The unique identifier of the gist."), "sha": z.string() }).optional() }).shape;
