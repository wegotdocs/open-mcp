import { z } from "zod"

export const toolName = `apps_revert_rollback`
export const toolDescription = `Revert App Rollback`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/rollback/revert`
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

export const inputParams = z.object({ "path": z.object({ "app_id": z.string().describe("The app ID") }).optional() }).shape