export { inputParams } from "./schema/root.js"

export const toolName = `createendpoint`
export const toolDescription = `Create a dedicated endpoint, it will start automatically`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/endpoints`
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
    "display_name",
    "model",
    "hardware",
    "autoscaling",
    "disable_prompt_cache",
    "disable_speculative_decoding",
    "state",
    "inactive_timeout"
  ]
}
export const flatMap = {}