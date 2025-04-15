export { inputParams } from "./schema/root.js"

export const toolName = `getdeployments`
export const toolDescription = `List deployments`
export const baseUrl = `https://api.vercel.com`
export const path = `/v6/deployments`
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
    "app",
    "from",
    "limit",
    "projectId",
    "target",
    "to",
    "users",
    "since",
    "until",
    "state",
    "rollbackCandidate",
    "branch",
    "sha",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}