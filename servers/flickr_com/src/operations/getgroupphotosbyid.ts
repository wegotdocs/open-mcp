import { z } from "zod"

export const toolName = `getgroupphotosbyid`
export const toolDescription = `Returns a list of pool photos for a given group`
export const baseUrl = `https://api.flickr.com/services`
export const path = `/rest?method=flickr.groups.pools.getPhotos`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "group_id": z.string().regex(new RegExp("^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$")).optional() }).optional() }).shape