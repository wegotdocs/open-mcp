import { z } from "zod"

export const toolName = `getphotolistcontextbyid`
export const toolDescription = `Returns next and previous photos in a photo list`
export const baseUrl = `https://api.flickr.com/services`
export const path = `/rest?method=flickr.photolist.getContext`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "photo_id": z.string().regex(new RegExp("^[0-9]+$")), "photolist_id": z.string() }).optional() }).shape