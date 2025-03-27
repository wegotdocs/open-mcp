import { z } from "zod"

export const toolName = `removescorecollaborator`
export const toolDescription = `Delete a collaborator`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/scores/{score}/collaborators/{collaborator}`
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