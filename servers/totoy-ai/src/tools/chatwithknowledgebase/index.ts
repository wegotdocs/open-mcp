export { inputParams } from "./schema/root.js"

export const toolName = `chatwithknowledgebase`
export const toolDescription = `Creates a Knowledge Base Chat Response for the given Messages.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/knowledge-bases/{knowledge_base_id}/chat`
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
    "knowledge_base_id"
  ],
  "cookie": [],
  "body": [
    "output_language",
    "language_level",
    "messages",
    "markdown_response"
  ]
}
export const flatMap = {}