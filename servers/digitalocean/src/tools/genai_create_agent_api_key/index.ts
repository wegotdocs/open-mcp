export { inputParams } from "./schema/root.js"

export const toolName = `genai_create_agent_api_key`
export const toolDescription = `Create an Agent API Key`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/agents/{agent_uuid}/api_keys`
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
  "query": [],
  "header": [],
  "path": [
    "agent_uuid"
  ],
  "cookie": [],
  "body": [
    "b_agent_uuid",
    "name"
  ]
}
export const flatMap = {
  "b_agent_uuid": "agent_uuid"
}