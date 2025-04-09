export { inputParams } from "./schema/root.js"

export const toolName = `genai_update_agent_deployment_visibility`
export const toolDescription = `Update Agent Status`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/agents/{uuid}/deployment_visibility`
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
  "query": [],
  "header": [],
  "path": [
    "uuid"
  ],
  "cookie": [],
  "body": [
    "b_uuid",
    "visibility"
  ]
}
export const flatMap = {
  "b_uuid": "uuid"
}