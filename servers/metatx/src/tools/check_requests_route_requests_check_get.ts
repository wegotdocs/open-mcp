import { z } from "zod"

export const toolName = `check_requests_route_requests_check_get`
export const toolDescription = `Check Requests Route`
export const baseUrl = `https://engineapi.moonstream.to/metatx`
export const path = `/requests/check`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "contract_id",
    "contract_address",
    "specifications",
    "ttl_days",
    "live_at"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "contract_id": z.string().uuid().optional(), "contract_address": z.string().optional(), "specifications": z.array(z.object({ "caller": z.string(), "method": z.string(), "call_request_type": z.string(), "request_id": z.string(), "parameters": z.record(z.any()) })).optional(), "ttl_days": z.number().int().optional(), "live_at": z.number().int().optional() }).shape