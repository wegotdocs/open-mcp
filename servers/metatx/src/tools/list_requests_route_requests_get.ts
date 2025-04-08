import { z } from "zod"

export const toolName = `list_requests_route_requests_get`
export const toolDescription = `List Requests Route`
export const baseUrl = `https://engineapi.moonstream.to/metatx`
export const path = `/requests`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "contract_id",
    "contract_address",
    "caller",
    "limit",
    "offset",
    "show_expired",
    "live_after"
  ],
  "header": [
    "authorization"
  ],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "contract_id": z.string().uuid().optional(),
  "contract_address": z.string().optional(),
  "caller": z.string(),
  "limit": z.number().int().optional(),
  "offset": z.number().int().optional(),
  "show_expired": z.boolean().optional(),
  "live_after": z.number().int().optional(),
  "authorization": z.string().optional()
}