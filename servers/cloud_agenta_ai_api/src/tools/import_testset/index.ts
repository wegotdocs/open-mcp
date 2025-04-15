export { inputParams } from "./schema/root.js"

export const toolName = `import_testset`
export const toolDescription = `Import Testset`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/testsets/endpoint`
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
  "query": [
    "authorization"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}