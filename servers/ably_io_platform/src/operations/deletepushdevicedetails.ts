import { z } from "zod"

export const toolName = `deletepushdevicedetails`
export const toolDescription = `Delete a registered device's update token`
export const baseUrl = `https://rest.ably.io`
export const path = `/push/channelSubscriptions`
export const method = `delete`
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

export const inputParams = z.object({ "query": z.object({ "channel": z.string().describe("Filter to restrict to subscriptions associated with that channel.").optional(), "deviceId": z.string().describe("Must be set when clientId is empty, cannot be used with clientId.").optional(), "clientId": z.string().describe("Must be set when deviceId is empty, cannot be used with deviceId.").optional() }).optional() }).shape