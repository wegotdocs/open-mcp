export { inputParams } from "./schema/root.js"

export const toolName = `getsource`
export const toolDescription = `Retrieves a Source.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/sources/{source_id}`
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
    "source_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}