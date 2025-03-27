import { z } from "zod"

export const toolName = `listclassstudentsubmissions`
export const toolDescription = `List the submissions for a student`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/classes/{class}/students/{user}/submissions`
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

export const inputParams = z.object({}).shape