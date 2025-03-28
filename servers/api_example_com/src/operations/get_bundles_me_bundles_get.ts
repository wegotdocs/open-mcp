import { z } from "zod"

export const toolName = `get_bundles_me_bundles_get`
export const toolDescription = `Get Bundles`
export const baseUrl = `https://api.example.com`
export const path = `/me/bundles`
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