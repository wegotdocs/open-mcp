import { z } from "zod"

export const toolName = `text_to_cron_v1_schedules_text_to_cron_get`
export const toolDescription = `Text To Cron`
export const baseUrl = `https://api.example.com`
export const path = `/v1/schedules/text-to-cron`
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

export const inputParams = z.object({ "query": z.object({ "cron": z.string() }).optional() }).shape