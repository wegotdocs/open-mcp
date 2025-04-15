export { inputParams } from "./schema/root.js"

export const toolName = `uploadartifact`
export const toolDescription = `Upload a cache artifact`
export const baseUrl = `https://api.vercel.com`
export const path = `/v8/artifacts/{hash}`
export const method = `put`
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
  "header": [
    "Content-Length",
    "x-artifact-duration",
    "x-artifact-client-ci",
    "x-artifact-client-interactive",
    "x-artifact-tag"
  ],
  "path": [
    "hash"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}