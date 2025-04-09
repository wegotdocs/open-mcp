export { inputParams } from "./schema/root.js"

export const toolName = `searchrepo`
export const toolDescription = `List git repositories linked to namespace by provider`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/integrations/search-repo`
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
    "query",
    "namespaceId",
    "provider",
    "installationId",
    "host",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}