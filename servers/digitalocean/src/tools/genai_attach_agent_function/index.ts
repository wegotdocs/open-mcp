export { inputParams } from "./schema/root.js"

export const toolName = `genai_attach_agent_function`
export const toolDescription = `Add Function Route to an Agent`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/agents/{agent_uuid}/functions`
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
    "description",
    "faas_name",
    "faas_namespace",
    "function_name",
    "input_schema",
    "output_schema"
  ]
}
export const flatMap = {
  "b_agent_uuid": "agent_uuid"
}