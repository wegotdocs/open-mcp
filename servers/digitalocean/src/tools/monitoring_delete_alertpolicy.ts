import { z } from "zod"

export const toolName = `monitoring_delete_alertpolicy`
export const toolDescription = `Delete an Alert Policy`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/monitoring/alerts/{alert_uuid}`
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
    "alert_uuid"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "alert_uuid": z.string().describe("A unique identifier for an alert policy.")
}