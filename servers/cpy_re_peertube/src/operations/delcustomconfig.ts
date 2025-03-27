import { z } from "zod"

export const toolName = `delcustomconfig`
export const toolDescription = `Delete instance runtime configuration`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/config/custom`
export const method = `delete`
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