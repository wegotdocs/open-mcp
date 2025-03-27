import { z } from "zod"

export const toolName = `zippedscreenshots`
export const toolDescription = `Fetch Zipped Screenshots`
export const baseUrl = `https://api.lambdatest.com/screenshots/v1`
export const path = `/{test_id}/zip`
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

export const inputParams = z.object({ "path": z.object({ "test_id": z.string().describe("Test ID that Zipped Screenshots you want to fetch") }).optional() }).shape