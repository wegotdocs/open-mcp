import { z } from "zod"

export const toolName = `getpresenceofchannel`
export const toolDescription = `Get presence of a channel`
export const baseUrl = `https://rest.ably.io`
export const path = `/channels/{channel_id}/presence`
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

export const inputParams = z.object({ "path": z.object({ "channel_id": z.string().describe("The [Channel's ID](https://www.ably.io/documentation/rest/channels).") }).optional(), "query": z.object({ "clientId": z.string().optional(), "connectionId": z.string().optional(), "limit": z.number().int() }).optional() }).shape