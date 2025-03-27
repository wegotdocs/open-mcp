import { z } from "zod"

export const toolName = `getphotostreamcontextbyid`
export const toolDescription = `Returns next and previous photos for a photo in a photostream`
export const baseUrl = `https://api.flickr.com/services`
export const path = `/rest?method=flickr.photos.getContext`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "photo_id": z.string().regex(new RegExp("^[0-9]+$")) }).optional() }).shape