export { inputParams } from "./schema/root.js"

export const toolName = `genai_update_agent_api_key`
export const toolDescription = `Update API Key for an Agent`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}`
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
    "agent_uuid",
    "api_key_uuid"
  ],
  "cookie": [],
  "body": [
    "b_agent_uuid",
    "b_api_key_uuid",
    "name"
  ]
}
export const flatMap = {
  "b_agent_uuid": "agent_uuid",
  "b_api_key_uuid": "api_key_uuid"
}