import { z } from "zod"

export const toolName = `get_response_headers`
export const toolDescription = `Returns a set of response headers from the query string.`
export const baseUrl = `https://httpbin.org`
export const path = `/response-headers`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "freeform": z.string().optional() }).optional() }).shape