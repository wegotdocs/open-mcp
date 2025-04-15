export { inputParams } from "./schema/root.js"

export const toolName = `uploadmodel`
export const toolDescription = `Upload a custom model`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/models`
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
    "model_name",
    "model_source",
    "hf_token",
    "description"
  ]
}
export const flatMap = {}