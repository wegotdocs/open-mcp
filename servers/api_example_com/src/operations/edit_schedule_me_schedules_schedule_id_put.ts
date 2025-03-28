import { z } from "zod"

export const toolName = `edit_schedule_me_schedules_schedule_id_put`
export const toolDescription = `Edit Schedule`
export const baseUrl = `https://api.example.com`
export const path = `/me/schedules/{schedule_id}`
export const method = `put`
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

export const inputParams = z.object({ "path": z.object({ "schedule_id": z.string().uuid() }).optional(), "body": z.object({ "active": z.boolean(), "cadence": z.string(), "bundle": z.union([z.string(), z.null()]), "toolhouse_id": z.union([z.string(), z.null()]), "vars": z.union([z.record(z.string()), z.null()]).optional(), "chat_id": z.union([z.string().uuid(), z.null()]).optional(), "callback_url": z.union([z.string().url().min(1), z.null()]).optional() }).optional() }).shape