import { z } from "zod"

export const toolName = `getgroupdiscussionsbyid`
export const toolDescription = `Get a list of discussion topics in a group.`
export const baseUrl = `https://api.flickr.com/services`
export const path = `/rest?method=flickr.groups.discuss.topics.getList`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "group_id": z.string().regex(new RegExp("^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$")).optional(), "page": z.number().optional(), "per_page": z.number().optional() }).optional() }).shape