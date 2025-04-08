import { z } from "zod"

export const toolName = `apps_get_metrics_bandwidth_daily`
export const toolDescription = `Retrieve App Daily Bandwidth Metrics`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/metrics/bandwidth_daily`
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
  "query": [
    "date"
  ],
  "header": [],
  "path": [
    "app_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "app_id": z.string().describe("The app ID"),
  "date": z.string().datetime({ offset: true }).describe("Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday.").optional()
}