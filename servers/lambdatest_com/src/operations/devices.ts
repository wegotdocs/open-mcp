import { z } from "zod"

export const toolName = `devices`
export const toolDescription = `Fetch all available device combinations.`
export const baseUrl = `https://api.lambdatest.com/screenshots/v1`
export const path = `/devices`
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

export const inputParams = z.object({ "query": z.object({ "os": z.string().describe("Fetch details for a particular OS").optional() }).optional() }).shape