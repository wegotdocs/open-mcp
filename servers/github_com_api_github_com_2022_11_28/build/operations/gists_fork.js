import { z } from "zod";
export const toolName = `gists_fork`;
export const toolDescription = `Fork a gist`;
export const baseUrl = `https://github.com`;
export const path = `/gists/{gist_id}/forks`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "gist_id": z.string().describe("The unique identifier of the gist.") }).optional() }).shape;
