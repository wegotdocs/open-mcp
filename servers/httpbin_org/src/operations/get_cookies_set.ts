import { z } from "zod"

export const toolName = `get_cookies_set`
export const toolDescription = `Sets cookie(s) as provided by the query string and redirects to cookie list.`
export const baseUrl = `https://httpbin.org`
export const path = `/cookies/set`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "freeform": z.string().optional() }).optional() }).shape