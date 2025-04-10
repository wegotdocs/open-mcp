export { inputParams } from "./schema/root.js"

export const toolName = `removebypassip`
export const toolDescription = `Remove System Bypass Rule`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/security/firewall/bypass`
export const method = `delete`
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
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "domain",
    "projectScope",
    "sourceIp",
    "allSources",
    "note"
  ]
}
export const flatMap = {}