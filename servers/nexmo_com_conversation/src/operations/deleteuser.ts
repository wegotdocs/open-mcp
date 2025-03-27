import { z } from "zod"

export const toolName = `deleteuser`
export const toolDescription = `Delete a user`
export const baseUrl = `https://api.nexmo.com/v0.1`
export const path = `/users/{user_id}`
export const method = `delete`
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