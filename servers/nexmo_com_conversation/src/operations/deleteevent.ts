import { z } from "zod"

export const toolName = `deleteevent`
export const toolDescription = `Delete an event`
export const baseUrl = `https://api.nexmo.com/v0.1`
export const path = `/conversations/{conversation_id}/events/{event_id}`
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