import { z } from "zod";
export const toolName = `getfavoritesbypersonid`;
export const toolDescription = `Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.`;
export const baseUrl = `https://api.flickr.com/services`;
export const path = `/rest?method=flickr.favorites.getList`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "user_id": z.string(), "min_fave_date": z.number().optional(), "max_fave_date": z.number().optional(), "page": z.number().optional(), "per_page": z.number().optional() }).optional() }).shape;
