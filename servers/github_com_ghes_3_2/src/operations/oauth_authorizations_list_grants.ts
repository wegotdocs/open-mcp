import { z } from "zod"

export const toolName = `oauth_authorizations_list_grants`
export const toolDescription = `List your grants`
export const baseUrl = `https://github.com`
export const path = `/applications/grants`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch."), "client_id": z.string().describe("The client ID of your GitHub app.").optional() }).optional() }).shape