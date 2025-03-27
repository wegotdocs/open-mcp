import { z } from "zod"

export const toolName = `getresourceowner`
export const toolDescription = `Retrieve a resource owner by ID`
export const baseUrl = `https://platform.climate.com`
export const path = `/v4/resourceOwners/{resourceOwnerId}`
export const method = `get`
export const security = [
  {
    "key": "X-Api-Key",
    "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-Api-Key"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "resourceOwnerId": z.string().uuid().describe("Unique identifier of the resource owner.") }).optional() }).shape