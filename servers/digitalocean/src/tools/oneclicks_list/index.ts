export { inputParams } from "./schema/root.js"

export const toolName = `oneclicks_list`
export const toolDescription = `List 1-Click Applications`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/1-clicks`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [
    "type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}