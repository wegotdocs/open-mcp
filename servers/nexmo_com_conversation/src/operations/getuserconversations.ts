import { z } from "zod"

export const toolName = `getuserconversations`
export const toolDescription = `List user conversations`
export const baseUrl = `https://api.nexmo.com/v0.1`
export const path = `/users/{user_id}/conversations`
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