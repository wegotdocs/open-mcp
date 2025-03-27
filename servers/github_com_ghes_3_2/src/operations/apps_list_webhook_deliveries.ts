import { z } from "zod"

export const toolName = `apps_list_webhook_deliveries`
export const toolDescription = `List deliveries for an app webhook`
export const baseUrl = `https://github.com`
export const path = `/app/hook/deliveries`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "cursor": z.string().describe("Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors.").optional() }).optional() }).shape