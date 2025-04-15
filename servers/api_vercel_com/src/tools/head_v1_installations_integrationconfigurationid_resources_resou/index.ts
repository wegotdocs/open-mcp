export { inputParams } from "./schema/root.js"

export const toolName = `head_v1_installations_integrationconfigurationid_resources_resou`
export const toolDescription = `Get the data of a user-provided Edge Config`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/edge-config`
export const method = `head`
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
    "resourceId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}