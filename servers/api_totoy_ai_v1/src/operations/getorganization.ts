import { z } from "zod"

export const toolName = `getorganization`
export const toolDescription = `Returns the Organization details.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/organization`
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