import { z } from "zod"

export const toolName = `get_aliases_v2_trackingid`
export const toolDescription = `Gets the tracking ID associated with an alias`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/aliases/v2/trackingId`
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