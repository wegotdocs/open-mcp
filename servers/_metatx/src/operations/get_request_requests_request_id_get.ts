import { z } from "zod"

export const toolName = `get_request_requests_request_id_get`
export const toolDescription = `Get Request`
export const baseUrl = `/metatx`
export const path = `/requests/{request_id}`
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

export const inputParams = z.object({ "path": z.object({ "request_id": z.string().uuid() }).optional() }).shape