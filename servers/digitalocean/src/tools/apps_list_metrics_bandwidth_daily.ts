import { z } from "zod"

export const toolName = `apps_list_metrics_bandwidth_daily`
export const toolDescription = `Retrieve Multiple Apps' Daily Bandwidth Metrics`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/metrics/bandwidth_daily`
export const method = `post`
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
  "path": [],
  "cookie": [],
  "body": [
    "app_ids",
    "date"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "app_ids": z.array(z.string()).max(100).describe("A list of app IDs to query bandwidth metrics for."), "date": z.string().datetime({ offset: true }).describe("Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday.").optional() }).shape