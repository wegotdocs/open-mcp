import { z } from "zod"

export const toolName = `ipinfo`
export const toolDescription = `IP Info`
export const baseUrl = `https://neutrinoapi.net`
export const path = `/ip-info`
export const method = `get`
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

export const inputParams = z.object({ "query": z.object({ "ip": z.string().describe("IPv4 or IPv6 address"), "reverse-lookup": z.boolean().describe("Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it") }).optional() }).shape