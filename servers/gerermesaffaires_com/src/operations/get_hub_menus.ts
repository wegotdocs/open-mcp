import { z } from "zod"

export const toolName = `get_hub_menus`
export const toolDescription = `Returns predefined folders and workbooks of the Hub for all the spaces`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/hub/menus`
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