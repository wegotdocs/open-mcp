import { z } from "zod"

export const toolName = `complete_call_request_route_requests_request_id_complete_post`
export const toolDescription = `Complete Call Request Route`
export const baseUrl = `/metatx`
export const path = `/requests/{request_id}/complete`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "request_id": z.string().uuid() }).optional(), "header": z.object({ "authorization": z.string().optional() }).optional(), "body": z.object({ "tx_hash": z.string() }).optional() }).shape