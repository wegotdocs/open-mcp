import { z } from "zod"

export const toolName = `forum_getpostandparent`
export const toolDescription = `Returns the post specified and its immediate parent.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Forum/GetPostAndParent/{childPostId}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "childPostId": z.number().int() }).optional(), "query": z.object({ "showbanned": z.string().describe("If this value is not null or empty, banned posts are requested to be returned").optional() }).optional() }).shape