import { z } from "zod"

export const toolName = `apps_create_deployment`
export const toolDescription = `Create an App Deployment`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/deployments`
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
  "path": [
    "app_id"
  ],
  "cookie": [],
  "body": [
    "force_build"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "app_id": z.string().describe("The app ID"), "force_build": z.boolean().optional() }).shape