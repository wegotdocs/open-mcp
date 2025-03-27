import { z } from "zod"

export const toolName = `getpushsubscriptionsonchannels`
export const toolDescription = `List channel subscriptions`
export const baseUrl = `https://rest.ably.io`
export const path = `/push/channelSubscriptions`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "query": z.object({ "channel": z.string().describe("Filter to restrict to subscriptions associated with that channel.").optional(), "deviceId": z.string().describe("Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.").optional(), "clientId": z.string().describe("Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.").optional(), "limit": z.number().int().lte(1000).describe("The maximum number of records to return.") }).optional() }).shape