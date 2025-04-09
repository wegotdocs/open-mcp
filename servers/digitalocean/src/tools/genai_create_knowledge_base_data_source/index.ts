export { inputParams } from "./schema/root.js"

export const toolName = `genai_create_knowledge_base_data_source`
export const toolDescription = `Add Data Source to a Knowledge Base`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources`
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
    "knowledge_base_uuid"
  ],
  "cookie": [],
  "body": [
    "b_knowledge_base_uuid",
    "spaces_data_source",
    "web_crawler_data_source"
  ]
}
export const flatMap = {
  "b_knowledge_base_uuid": "knowledge_base_uuid"
}