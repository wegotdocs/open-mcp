export { inputParams } from "./schema/root.js"

export const toolName = `listaliases`
export const toolDescription = `List aliases`
export const baseUrl = `https://api.vercel.com`
export const path = `/v4/aliases`
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
    "domain",
    "from",
    "limit",
    "projectId",
    "since",
    "until",
    "rollbackDeploymentId",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}