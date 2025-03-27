import { z } from "zod"

export const toolName = `getsubmissionhistory`
export const toolDescription = `Get the history of the submission`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/classes/{class}/assignments/{assignment}/submissions/{submission}/history`
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