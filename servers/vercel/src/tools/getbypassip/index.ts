export { inputParams } from "./schema/root.js"

export const toolName = `getbypassip`
export const toolDescription = `Read System Bypass`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/security/firewall/bypass`
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
    "projectId",
    "limit",
    "sourceIp",
    "domain",
    "projectScope",
    "offset",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}