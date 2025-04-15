export { inputParams } from "./schema/root.js"

export const toolName = `admin_report_usage`
export const toolDescription = `Report Usage`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/admin/billing/usage/report`
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