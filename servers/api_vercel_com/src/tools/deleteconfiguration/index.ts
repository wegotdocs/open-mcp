export { inputParams } from "./schema/root.js"

export const toolName = `deleteconfiguration`
export const toolDescription = `Delete an integration configuration`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/integrations/configuration/{id}`
export const method = `delete`
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
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}