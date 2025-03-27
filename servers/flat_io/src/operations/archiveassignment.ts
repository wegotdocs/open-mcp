import { z } from "zod"

export const toolName = `archiveassignment`
export const toolDescription = `Archive the assignment`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/classes/{class}/assignments/{assignment}/archive`
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