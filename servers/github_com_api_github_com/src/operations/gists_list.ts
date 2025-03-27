import { z } from "zod"

export const toolName = `gists_list`
export const toolDescription = `List gists for the authenticated user`
export const baseUrl = `https://api.github.com`
export const path = `/gists`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "since": z.string().datetime({ offset: true }).describe("Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(), "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape