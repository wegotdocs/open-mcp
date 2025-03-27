import { z } from "zod"

export const toolName = `subscribepushdevicetochannel`
export const toolDescription = `Subscribe a device to a channel`
export const baseUrl = `https://rest.ably.io`
export const path = `/push/channelSubscriptions`
export const method = `post`
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

export const inputParams = z.object({ "body": z.object({ "channel": z.string().describe("Channel name.").optional(), "deviceId": z.string().describe("Must be set when clientId is empty, cannot be used with clientId.").optional() }).optional() }).shape