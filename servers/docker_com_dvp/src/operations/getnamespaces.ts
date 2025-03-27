import { z } from "zod"

export const toolName = `getnamespaces`
export const toolDescription = `Get namespaces and repos`
export const baseUrl = `https://hub.docker.com/api/publisher/analytics/v1`
export const path = `/`
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