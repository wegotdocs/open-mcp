import { z } from "zod"

export const toolName = `uptime_delete_alert`
export const toolDescription = `Delete an Alert`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/uptime/checks/{check_id}/alerts/{alert_id}`
export const method = `delete`
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
  "path": [
    "check_id",
    "alert_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "check_id": z.string().uuid().describe("A unique identifier for a check."),
  "alert_id": z.string().uuid().describe("A unique identifier for an alert.")
}