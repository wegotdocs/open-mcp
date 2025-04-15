export { inputParams } from "./schema/root.js"

export const toolName = `getdeploymentevents`
export const toolDescription = `Get deployment events`
export const baseUrl = `https://api.vercel.com`
export const path = `/v3/deployments/{idOrUrl}/events`
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
    "direction",
    "follow",
    "limit",
    "name",
    "since",
    "until",
    "statusCode",
    "delimiter",
    "builds",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "idOrUrl"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}