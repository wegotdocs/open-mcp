import { z } from "zod"

export const toolName = `get_active_schedules_backoffice_schedules_get`
export const toolDescription = `Get Active Schedules`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/schedules`
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