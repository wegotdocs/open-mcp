import { z } from "zod"

export const toolName = `apps_cancel_deployment`
export const toolDescription = `Cancel a Deployment`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/deployments/{deployment_id}/cancel`
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

export const inputParams = z.object({ "path": z.object({ "app_id": z.string().describe("The app ID"), "deployment_id": z.string().describe("The deployment ID") }).optional() }).shape