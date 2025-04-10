export { inputParams } from "./schema/root.js"

export const toolName = `artifactquery`
export const toolDescription = `Query information about an artifact`
export const baseUrl = `https://api.vercel.com`
export const path = `/v8/artifacts`
export const method = `post`
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
  "path": [],
  "cookie": [],
  "body": [
    "hashes"
  ]
}
export const flatMap = {}