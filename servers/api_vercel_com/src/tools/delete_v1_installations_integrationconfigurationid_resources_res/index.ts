export { inputParams } from "./schema/root.js"

export const toolName = `delete_v1_installations_integrationconfigurationid_resources_res`
export const toolDescription = `Delete an existing experimentation item`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}`
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
  "query": [],
  "header": [],
  "path": [
    "integrationConfigurationId",
    "resourceId",
    "itemId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}