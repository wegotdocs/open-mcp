import { z } from "zod"

export const toolName = `get_request_requests_request_id_get`
export const toolDescription = `Get Request`
export const baseUrl = `https://engineapi.moonstream.to/metatx`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "request_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "request_id": z.string().uuid() }).shape