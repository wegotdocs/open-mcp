export { inputParams } from "./schema/root.js"

export const toolName = `post_fine_tunes_id_cancel`
export const toolDescription = `Cancel job`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/fine-tunes/{id}/cancel`
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
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}