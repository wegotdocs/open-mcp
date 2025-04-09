export { inputParams } from "./schema/root.js"

export const toolName = `genai_create_openai_api_key`
export const toolDescription = `Create OpenAI API Key`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/openai/keys`
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
    "api_key",
    "name"
  ]
}
export const flatMap = {}