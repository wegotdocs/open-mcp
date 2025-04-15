export { inputParams } from "./schema/root.js"

export const toolName = `get_single_testset`
export const toolDescription = `Get Single Testset`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/testsets/{testset_id}`
export const method = `get`
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
  "path": [
    "testset_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}