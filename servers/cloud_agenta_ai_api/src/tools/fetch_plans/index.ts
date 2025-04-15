export { inputParams } from "./schema/root.js"

export const toolName = `fetch_plans`
export const toolDescription = `Fetch Plan User Route`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/billing/plans`
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
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}