import { z } from "zod"

export const toolName = `locations`
export const toolDescription = `Fetch Locations`
export const baseUrl = `https://api.lambdatest.com/screenshots/v1`
export const path = `/locations`
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