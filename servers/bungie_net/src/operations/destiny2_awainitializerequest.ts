import { z } from "zod"

export const toolName = `destiny2_awainitializerequest`
export const toolDescription = `Initialize a request to perform an advanced write action.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/Awa/Initialize/`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({}).shape