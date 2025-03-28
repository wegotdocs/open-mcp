import { z } from "zod"

export const toolName = `fetch_tools_route_backoffice_tools_get`
export const toolDescription = `Fetch Tools Route`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/tools`
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

export const inputParams = z.object({}).shape