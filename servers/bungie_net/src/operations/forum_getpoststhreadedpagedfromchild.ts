import { z } from "zod"

export const toolName = `forum_getpoststhreadedpagedfromchild`
export const toolDescription = `Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Forum/GetPostsThreadedPagedFromChild/{childPostId}/{page}/{pageSize}/{replySize}/{rootThreadMode}/{sortMode}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "childPostId": z.number().int(), "page": z.number().int(), "pageSize": z.number().int(), "replySize": z.number().int(), "rootThreadMode": z.boolean(), "sortMode": z.number().int() }).optional(), "query": z.object({ "showbanned": z.string().describe("If this value is not null or empty, banned posts are requested to be returned").optional() }).optional() }).shape