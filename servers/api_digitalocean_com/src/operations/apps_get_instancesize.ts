import { z } from "zod"

export const toolName = `apps_get_instancesize`
export const toolDescription = `Retrieve an Instance Size`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/tiers/instance_sizes/{slug}`
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

export const inputParams = z.object({ "path": z.object({ "slug": z.string().describe("The slug of the instance size") }).optional() }).shape