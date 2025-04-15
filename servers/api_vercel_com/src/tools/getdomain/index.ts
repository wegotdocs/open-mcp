export { inputParams } from "./schema/root.js"

export const toolName = `getdomain`
export const toolDescription = `Get Information for a Single Domain`
export const baseUrl = `https://api.vercel.com`
export const path = `/v5/domains/{domain}`
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
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "domain"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}