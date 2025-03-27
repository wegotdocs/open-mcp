import { z } from "zod"

export const toolName = `get_menus`
export const toolDescription = `Returns predefined entries`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/menus`
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