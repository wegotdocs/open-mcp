export { inputParams } from "./schema/root.js"

export const toolName = `genai_create_indexing_job`
export const toolDescription = `Start Indexing Job for a Knowledge Base`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/indexing_jobs`
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
    "data_source_uuids",
    "knowledge_base_uuid"
  ]
}
export const flatMap = {}