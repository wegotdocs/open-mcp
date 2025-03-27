import { z } from "zod"

export const toolName = `post_blocked_numbers`
export const toolDescription = `Create a blocked number`
export const baseUrl = `https://api.bulksms.com/v1`
export const path = `/blocked-numbers`
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

export const inputParams = z.object({ "body": z.array(z.string().describe("A phone number in E.164 format")).optional() }).shape