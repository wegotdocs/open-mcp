export { inputParams } from "./schema/root.js"

export const toolName = `genai_get_indexing_job`
export const toolDescription = `Retrieve Status of Indexing Job for a Knowledge Base`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/indexing_jobs/{uuid}`
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
  "path": [
    "uuid"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}