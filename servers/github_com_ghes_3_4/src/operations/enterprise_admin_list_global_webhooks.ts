import { z } from "zod"

export const toolName = `enterprise_admin_list_global_webhooks`
export const toolDescription = `List global webhooks`
export const baseUrl = `https://github.com`
export const path = `/admin/hooks`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape