import { z } from "zod";
export const toolName = `get_tagsets`;
export const toolDescription = `List tag sets`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/tagsets`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "ownedBy": z.string().describe("Restrict results to those owned by this user.").optional(), "urlWords": z.string().describe("Restrict results by urlWords. Should be used with ownedBy when searching for one of your own tag sets.").optional() }).optional() }).shape;
