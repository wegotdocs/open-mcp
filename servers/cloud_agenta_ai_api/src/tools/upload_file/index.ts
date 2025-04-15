export { inputParams } from "./schema/root.js"

export const toolName = `upload_file`
export const toolDescription = `Upload File`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/testsets/upload`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}