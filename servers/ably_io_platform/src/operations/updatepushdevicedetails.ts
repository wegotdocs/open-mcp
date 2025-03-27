import { z } from "zod"

export const toolName = `updatepushdevicedetails`
export const toolDescription = `Reset a registered device's update token`
export const baseUrl = `https://rest.ably.io`
export const path = `/push/deviceRegistrations/{device_id}/resetUpdateToken`
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

export const inputParams = z.object({ "path": z.object({ "device_id": z.string().describe("Device's ID.") }).optional() }).shape