import { z } from "zod"

export const toolName = `deletescorecomment`
export const toolDescription = `Delete a comment`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/scores/{score}/comments/{comment}`
export const method = `delete`
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