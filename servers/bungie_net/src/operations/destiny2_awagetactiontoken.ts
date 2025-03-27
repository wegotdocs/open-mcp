import { z } from "zod"

export const toolName = `destiny2_awagetactiontoken`
export const toolDescription = `Returns the action token if user approves the request.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/Awa/GetActionToken/{correlationId}/`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "correlationId": z.string().describe("The identifier for the advanced write action request.") }).optional() }).shape