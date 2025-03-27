import { z } from "zod"

export const toolName = `getmember`
export const toolDescription = `Retrieve a member`
export const baseUrl = `https://api.nexmo.com/v0.1`
export const path = `/conversations/{conversation_id}/members/{member_id}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({}).shape