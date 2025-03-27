import { z } from "zod";
export const toolName = `get_rest_method_flickr_groups_pools_getcontext`;
export const toolDescription = `Returns next and previous photos for a photo in a group pool`;
export const baseUrl = `https://api.flickr.com/services`;
export const path = `/rest?method=flickr.groups.pools.getContext`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "photo_id": z.string().regex(new RegExp("^[0-9]+$")), "group_id": z.string().regex(new RegExp("^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$")).optional() }).optional() }).shape;
