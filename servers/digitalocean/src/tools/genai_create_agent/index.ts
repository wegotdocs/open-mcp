export { inputParams } from "./schema/root.js"

export const toolName = `genai_create_agent`
export const toolDescription = `Create an Agent`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/agents`
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
  "path": [],
  "cookie": [],
  "body": [
    "anthropic_key_uuid",
    "description",
    "instruction",
    "knowledge_base_uuid",
    "model_uuid",
    "name",
    "open_ai_key_uuid",
    "project_id",
    "region",
    "tags"
  ]
}
export const flatMap = {}