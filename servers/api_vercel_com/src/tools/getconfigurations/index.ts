export { inputParams } from "./schema/root.js"

export const toolName = `getconfigurations`
export const toolDescription = `Get configurations for the authenticated user or team`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/integrations/configurations`
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
    "view",
    "installationType",
    "integrationIdOrSlug",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}