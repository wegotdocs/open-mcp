export { inputParams } from "./schema/root.js"

export const toolName = `getactiveattackstatus`
export const toolDescription = `Read active attack data`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/security/firewall/attack-status`
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
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}