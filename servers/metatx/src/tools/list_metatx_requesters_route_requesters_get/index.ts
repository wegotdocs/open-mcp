export { inputParams } from "./schema/root.js"

export const toolName = `list_metatx_requesters_route_requesters_get`
export const toolDescription = `List Metatx Requesters Route`
export const baseUrl = `https://engineapi.moonstream.to/metatx`
export const path = `/requesters`
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
  "body": []
}
export const flatMap = {}