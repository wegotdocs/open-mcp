import { z } from "zod"

export const toolName = `list_requests_route_requests_get`
export const toolDescription = `List Requests Route`
export const baseUrl = `/metatx`
export const path = `/requests`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "contract_id": z.string().uuid().optional(), "contract_address": z.string().optional(), "caller": z.string(), "limit": z.number().int(), "offset": z.number().int().optional(), "show_expired": z.boolean(), "live_after": z.number().int().optional() }).optional(), "header": z.object({ "authorization": z.string().optional() }).optional() }).shape