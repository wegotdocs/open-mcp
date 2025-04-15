export { inputParams } from "./schema/root.js"

export const toolName = `removerecord`
export const toolDescription = `Delete a DNS record`
export const baseUrl = `https://api.vercel.com`
export const path = `/v2/domains/{domain}/records/{recordId}`
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
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "domain",
    "recordId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}