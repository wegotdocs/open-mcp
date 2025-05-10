import { z } from "zod"

export const toolName = `updateauthconfiguration`
export const toolDescription = `Update the auth configuration`
export const baseUrl = `https://api.example.com`
export const path = `/api/v1/auth/config`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "authenticationEnabled",
    "authorisationEnabled",
    "authConfig"
  ]
}
export const flatMap = {}

export const inputParams = {
  "authenticationEnabled": z.boolean().describe("Indicates if authentication is enabled").optional(),
  "authorisationEnabled": z.boolean().describe("Indicates if authorization is enabled").optional(),
  "authConfig": z.record(z.any()).describe("Configuration properties for authentication").optional()
}