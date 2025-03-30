import { z } from "zod"

export const toolName = `apps_assign_alertdestinations`
export const toolDescription = `Update destinations for alerts`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/alerts/{alert_id}/destinations`
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

export const inputParams = z.object({ "path": z.object({ "app_id": z.string().describe("The app ID"), "alert_id": z.string().describe("The alert ID") }).optional(), "body": z.object({ "emails": z.array(z.string()).optional(), "slack_webhooks": z.array(z.object({ "url": z.string().optional(), "channel": z.string().optional() })).optional() }).optional() }).shape