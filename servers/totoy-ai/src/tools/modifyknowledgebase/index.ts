export { inputParams } from "./schema/root.js"

export const toolName = `modifyknowledgebase`
export const toolDescription = `Modifies a Knowledge Base.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/knowledge-bases/{knowledge_base_id}`
export const method = `patch`
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
    "knowledge_base_id"
  ],
  "cookie": [],
  "body": [
    "name",
    "instructions",
    "project_id"
  ]
}
export const flatMap = {}