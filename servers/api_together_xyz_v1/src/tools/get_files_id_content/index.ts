export { inputParams } from "./schema/root.js"

export const toolName = `get_files_id_content`
export const toolDescription = `Get file contents`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/files/{id}/content`
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
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}