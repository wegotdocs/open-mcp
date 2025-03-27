import { z } from "zod"

export const toolName = `enterprise_admin_list_personal_access_tokens`
export const toolDescription = `List personal access tokens`
export const baseUrl = `https://github.com`
export const path = `/admin/tokens`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape