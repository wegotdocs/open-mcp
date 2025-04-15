export { inputParams } from "./schema/root.js"

export const toolName = `listpromotealiases`
export const toolDescription = `Gets a list of aliases with status for the current promote`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/projects/{projectId}/promote/aliases`
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
    "limit",
    "since",
    "until",
    "failedOnly",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "projectId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}