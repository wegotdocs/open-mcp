import { z } from "zod"

export const toolName = `content_rssnewsarticles`
export const toolDescription = `Returns a JSON string response that is the RSS feed for news articles.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Content/Rss/NewsArticles/{pageToken}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "categoryfilter": z.string().describe("Optionally filter response to only include news items in a certain category.").optional(), "includebody": z.boolean().describe("Optionally include full content body for each news item.").optional() }).optional(), "path": z.object({ "pageToken": z.string().describe("Zero-based pagination token for paging through result sets.") }).optional() }).shape