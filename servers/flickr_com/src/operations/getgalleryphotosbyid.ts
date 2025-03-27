import { z } from "zod"

export const toolName = `getgalleryphotosbyid`
export const toolDescription = `Returns a list of photos in a gallery.`
export const baseUrl = `https://api.flickr.com/services`
export const path = `/rest?method=flickr.galleries.getPhotos`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "gallery_id": z.string() }).optional() }).shape