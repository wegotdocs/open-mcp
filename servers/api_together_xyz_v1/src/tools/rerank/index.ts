export { inputParams } from "./schema/root.js"

export const toolName = `rerank`
export const toolDescription = `Create a rerank request`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/rerank`
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
    "query",
    "documents",
    "top_n",
    "return_documents",
    "rank_fields"
  ]
}
export const flatMap = {}