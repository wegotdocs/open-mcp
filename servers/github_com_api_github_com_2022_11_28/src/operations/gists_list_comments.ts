import { z } from "zod"

export const toolName = `gists_list_comments`
export const toolDescription = `List gist comments`
export const baseUrl = `https://github.com`
export const path = `/gists/{gist_id}/comments`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "gist_id": z.string().describe("The unique identifier of the gist.") }).optional(), "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape