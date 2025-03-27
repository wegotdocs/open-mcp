import { z } from "zod"

export const toolName = `forum_gettopicspaged`
export const toolDescription = `Get topics from any forum.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Forum/GetTopicsPaged/{page}/{pageSize}/{group}/{sort}/{quickDate}/{categoryFilter}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "categoryFilter": z.number().int().describe("A category filter"), "group": z.number().int().describe("The group, if any."), "page": z.number().int().describe("Zero paged page number"), "pageSize": z.number().int().describe("Unused"), "quickDate": z.number().int().describe("A date filter."), "sort": z.number().int().describe("The sort mode.") }).optional(), "query": z.object({ "locales": z.string().describe("Comma seperated list of locales posts must match to return in the result list. Default 'en'").optional(), "tagstring": z.string().describe("The tags to search, if any.").optional() }).optional() }).shape