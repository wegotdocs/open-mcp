import { z } from "zod"

export const toolName = `monitoring_get_apprestartcountmetrics_yml`
export const toolDescription = `Get App Restart Count Metrics`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/monitoring/metrics/apps/restart_count`
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
    "app_id",
    "app_component",
    "start",
    "end"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "app_id": z.string().describe("The app UUID."),
  "app_component": z.string().describe("The app component name.").optional(),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}