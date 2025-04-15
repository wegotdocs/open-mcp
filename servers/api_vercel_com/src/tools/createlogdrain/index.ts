export { inputParams } from "./schema/root.js"

export const toolName = `createlogdrain`
export const toolDescription = `Creates a new Integration Log Drain`
export const baseUrl = `https://api.vercel.com`
export const path = `/v2/integrations/log-drains`
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
    "name",
    "projectIds",
    "secret",
    "deliveryFormat",
    "url",
    "sources",
    "headers",
    "environments"
  ]
}
export const flatMap = {}