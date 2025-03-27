import { z } from "zod"

export const toolName = `getmessengeraccount`
export const toolDescription = `Retrieve a Messenger account`
export const baseUrl = `https://api.nexmo.com/beta/chatapp-accounts`
export const path = `/messenger/{external_id}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "path": z.object({ "external_id": z.string().describe("External id of the account you want to retrieve. In this case it is the Facebook Page ID.") }).optional() }).shape