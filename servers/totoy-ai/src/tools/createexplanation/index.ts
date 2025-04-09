export { inputParams } from "./schema/root.js"

export const toolName = `createexplanation`
export const toolDescription = `Explains a document in any language`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/explanation`
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
    "output_language",
    "language_level",
    "source_id",
    "messages",
    "markdown_response"
  ]
}
export const flatMap = {}