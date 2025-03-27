import { z } from "zod"

export const toolName = `deleteleg`
export const toolDescription = `Delete a leg`
export const baseUrl = `https://api.nexmo.com/v0.1`
export const path = `/legs/{leg_id}`
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