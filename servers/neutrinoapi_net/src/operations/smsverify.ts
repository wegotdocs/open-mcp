import { z } from "zod"

export const toolName = `smsverify`
export const toolDescription = `SMS Verify`
export const baseUrl = `https://neutrinoapi.net`
export const path = `/sms-verify`
export const method = `post`
export const security = [
  {
    "key": "api-key",
    "value": "<mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "apiKey",
    "schemeName": "api-key"
  },
  {
    "key": "user-id",
    "value": "<mcp-env-var>USER_ID</mcp-env-var>",
    "in": "header",
    "envVarName": "USER_ID",
    "schemeType": "apiKey",
    "schemeName": "user-id"
  }
]

export const inputParams = z.object({}).shape