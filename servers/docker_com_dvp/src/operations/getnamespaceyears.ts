import { z } from "zod"

export const toolName = `getnamespaceyears`
export const toolDescription = `Get years with data`
export const baseUrl = `https://hub.docker.com/api/publisher/analytics/v1`
export const path = `/namespaces/{namespace}/pulls/exports/years`
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

export const inputParams = z.object({ "path": z.object({ "namespace": z.string().describe("Namespace to fetch data for") }).optional() }).shape