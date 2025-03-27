import { z } from "zod"

export const toolName = `archiveclass`
export const toolDescription = `Archive the class`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/classes/{class}/archive`
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