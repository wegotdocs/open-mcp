import { z } from "zod"

export const toolName = `getcustomconfig`
export const toolDescription = `Get instance runtime configuration`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/config/custom`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({}).shape