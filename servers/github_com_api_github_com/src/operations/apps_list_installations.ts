import { z } from "zod"

export const toolName = `apps_list_installations`
export const toolDescription = `List installations for the authenticated app`
export const baseUrl = `https://api.github.com`
export const path = `/app/installations`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch."), "since": z.string().datetime({ offset: true }).describe("Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(), "outdated": z.string().optional() }).optional() }).shape