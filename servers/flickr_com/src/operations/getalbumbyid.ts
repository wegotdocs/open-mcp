import { z } from "zod"

export const toolName = `getalbumbyid`
export const toolDescription = `Returns a list of photos in an album.`
export const baseUrl = `https://api.flickr.com/services`
export const path = `/rest?method=flickr.photosets.getPhotos`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "photoset_id": z.string().regex(new RegExp("^[0-9]+$")) }).optional() }).shape