import { z } from "zod"

export const toolName = `listsources`
export const toolDescription = `Returns a list of Sources.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/sources`
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