import { z } from "zod"

export const toolName = `list_requests_route_requests_get`
export const toolDescription = `List Requests Route`
export const baseUrl = `/metatx`
export const path = `/requests`
export const method = `get`
export const security = []

export const inputParams = z.object({ "q_contract_id": z.string().uuid().optional(), "q_contract_address": z.string().optional(), "q_caller": z.string(), "q_limit": z.number().int(), "q_offset": z.number().int().optional(), "q_show_expired": z.boolean(), "q_live_after": z.number().int().optional(), "h_authorization": z.string().optional() }).shape