export { inputParams } from "./schema/root.js"

export const toolName = `delete_testsets`
export const toolDescription = `Delete Testsets`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/testsets`
export const method = `delete`
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
  "body": [
    "testset_ids"
  ]
}
export const flatMap = {}