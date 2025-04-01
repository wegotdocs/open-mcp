import { z } from "zod"

export const toolName = `create_schedule_me_schedules_post`
export const toolDescription = `Create Schedule`
export const baseUrl = `https://api.example.com`
export const path = `/me/schedules`
export const method = `post`
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

export const inputParams = z.object({ "body": z.object({ "chat_id": z.string().uuid(), "cadence": z.string(), "bundle": z.string(), "toolhouse_id": z.string(), "vars": z.union([z.record(z.string()), z.null()]).optional(), "callback_url": z.union([z.string().url().min(1), z.null()]).optional() }).optional() }).shape