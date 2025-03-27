import { z } from "zod"

export const toolName = `addclassuser`
export const toolDescription = `Add a user to the class`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/classes/{class}/users/{user}`
export const method = `put`
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