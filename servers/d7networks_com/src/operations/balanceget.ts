import { z } from "zod"

export const toolName = `balanceget`
export const toolDescription = `Balance`
export const baseUrl = `https://rest-api.d7networks.com/secure`
export const path = `/balance`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({}).shape