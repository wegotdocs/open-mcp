import { z } from "zod"

export const toolName = `getregisteredpushdevices`
export const toolDescription = `List devices registered for receiving push notifications`
export const baseUrl = `https://rest.ably.io`
export const path = `/push/deviceRegistrations`
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

export const inputParams = z.object({ "query": z.object({ "deviceId": z.string().describe("Optional filter to restrict to devices associated with that deviceId.").optional(), "clientId": z.string().describe("Optional filter to restrict to devices associated with that clientId.").optional(), "limit": z.number().int().lte(1000).describe("The maximum number of records to return.") }).optional() }).shape