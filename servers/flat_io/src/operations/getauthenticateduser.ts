import { z } from "zod"

export const toolName = `getauthenticateduser`
export const toolDescription = `Get current user profile`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/me`
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

export const inputParams = z.object({ "query": z.object({ "onlyId": z.boolean().describe("Only return the user id") }).optional() }).shape