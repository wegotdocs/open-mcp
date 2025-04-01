import { z } from "zod"

export const toolName = `complete_call_request_route_requests_request_id_complete_post`
export const toolDescription = `Complete Call Request Route`
export const baseUrl = `/metatx`
export const path = `/requests/{request_id}/complete`
export const method = `post`
export const security = []

export const inputParams = z.object({ "p_request_id": z.string().uuid(), "h_authorization": z.string().optional(), "b_tx_hash": z.string() }).shape