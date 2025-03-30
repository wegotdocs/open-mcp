import { z } from "zod"

export const toolName = `apps_list_alerts`
export const toolDescription = `List all app alerts`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/alerts`
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

export const inputParams = z.object({ "path": z.object({ "app_id": z.string().describe("The app ID") }).optional() }).shape