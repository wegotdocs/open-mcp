import { z } from "zod";
export const toolName = `getpersonbyid`;
export const toolDescription = `Returns a person`;
export const baseUrl = `https://api.flickr.com/services`;
export const path = `/rest?method=flickr.people.getInfo`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "user_id": z.string().regex(new RegExp("^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$")).optional() }).optional() }).shape;
