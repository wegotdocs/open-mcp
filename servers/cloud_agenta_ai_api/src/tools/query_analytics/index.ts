export { inputParams } from "./schema/root.js"

export const toolName = `query_analytics`
export const toolDescription = `Query analytics, with optional grouping, windowing, filtering.`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/observability/v1/analytics`
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
  "query": [
    "format",
    "focus",
    "oldest",
    "newest",
    "window",
    "filtering",
    "timeRange",
    "app_id",
    "environment",
    "variant"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}