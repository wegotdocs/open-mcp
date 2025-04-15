export { inputParams } from "./schema/root.js"

export const toolName = `get_fine_tunes`
export const toolDescription = `List all jobs`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/fine-tunes`
export const method = `get`
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
  "body": []
}
export const flatMap = {}