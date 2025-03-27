import { z } from "zod"

export const toolName = `unregisterallpushdevices`
export const toolDescription = `Unregister matching devices for push notifications`
export const baseUrl = `https://rest.ably.io`
export const path = `/push/deviceRegistrations`
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

export const inputParams = z.object({ "query": z.object({ "deviceId": z.string().describe("Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.").optional(), "clientId": z.string().describe("Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.").optional() }).optional() }).shape