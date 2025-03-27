import { z } from "zod"

export const toolName = `apps_list_repos_accessible_to_installation`
export const toolDescription = `List repositories accessible to the app installation`
export const baseUrl = `https://github.com`
export const path = `/installation/repositories`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape