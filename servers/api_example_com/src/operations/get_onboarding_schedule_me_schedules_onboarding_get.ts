import { z } from "zod"

export const toolName = `get_onboarding_schedule_me_schedules_onboarding_get`
export const toolDescription = `Get Onboarding Schedule`
export const baseUrl = `https://api.example.com`
export const path = `/me/schedules/onboarding`
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