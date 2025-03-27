import { z } from "zod"

export const toolName = `getlicensebyid`
export const toolDescription = `Fetches a list of available photo licenses for Flickr`
export const baseUrl = `https://api.flickr.com/services`
export const path = `/rest?method=flickr.photos.licenses.getInfo`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string() }).optional() }).shape