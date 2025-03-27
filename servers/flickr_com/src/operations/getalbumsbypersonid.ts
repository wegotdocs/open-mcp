import { z } from "zod"

export const toolName = `getalbumsbypersonid`
export const toolDescription = `Returns the albums belonging to the specified user`
export const baseUrl = `https://api.flickr.com/services`
export const path = `/rest?method=flickr.photosets.getList`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "user_id": z.string(), "page": z.number().optional(), "per_page": z.number().optional() }).optional() }).shape