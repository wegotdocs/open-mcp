import { z } from "zod"

export const toolName = `apps_restart`
export const toolDescription = `Restart an App`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/restart`
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

export const inputParams = z.object({ "path": z.object({ "app_id": z.string().describe("The app ID") }).optional(), "body": z.object({ "components": z.array(z.string()).optional() }).optional() }).shape