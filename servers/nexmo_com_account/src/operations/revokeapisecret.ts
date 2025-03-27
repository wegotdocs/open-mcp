import { z } from "zod"

export const toolName = `revokeapisecret`
export const toolDescription = `Revoke an API Secret`
export const baseUrl = `https://api.nexmo.com`
export const path = `/accounts/{api_key}/secrets/{secret_id}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "api_key": z.string().describe("The API key to manage secrets for"), "secret_id": z.string().describe("ID of the API Secret") }).optional() }).shape