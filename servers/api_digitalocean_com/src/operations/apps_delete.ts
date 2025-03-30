import { z } from "zod"

export const toolName = `apps_delete`
export const toolDescription = `Delete an App`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{id}`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("The ID of the app") }).optional() }).shape