export { inputParams } from "./schema/root.js"

export const toolName = `embeddings`
export const toolDescription = `Create embedding`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/embeddings`
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
    "model",
    "input"
  ]
}
export const flatMap = {}