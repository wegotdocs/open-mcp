import { z } from "zod"

export const toolName = `resolutions`
export const toolDescription = `Fetch all available resolution on different OS`
export const baseUrl = `https://api.lambdatest.com/screenshots/v1`
export const path = `/resolutions`
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