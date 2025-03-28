import { z } from "zod"

export const toolName = `del_schedule_v1_schedules_schedule_id_delete`
export const toolDescription = `Del Schedule`
export const baseUrl = `https://api.example.com`
export const path = `/v1/schedules/{schedule_id}`
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

export const inputParams = z.object({ "path": z.object({ "schedule_id": z.string().uuid() }).optional() }).shape