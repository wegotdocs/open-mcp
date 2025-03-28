import { z } from "zod"

export const toolName = `create_agent_run_from_schedule_backoffice_agent_runs_from_schedu`
export const toolDescription = `Create Agent Run From Schedule`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/agent-runs-from-schedule`
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

export const inputParams = z.object({ "body": z.object({ "id": z.union([z.string().uuid(), z.null()]) }).optional() }).shape