import { z } from "zod"

export const toolName = `create_async_report`
export const toolDescription = `Create an asynchronous report`
export const baseUrl = `https://api.nexmo.com`
export const path = `/v2/reports`
export const method = `post`
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

export const inputParams = z.object({ "body": z.string().optional() }).shape