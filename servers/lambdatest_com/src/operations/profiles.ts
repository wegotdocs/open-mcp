import { z } from "zod"

export const toolName = `profiles`
export const toolDescription = `Fetch login profiles`
export const baseUrl = `https://api.lambdatest.com/screenshots/v1`
export const path = `/profiles`
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