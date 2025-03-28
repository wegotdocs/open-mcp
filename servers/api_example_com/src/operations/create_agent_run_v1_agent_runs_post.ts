import { z } from "zod"

export const toolName = `create_agent_run_v1_agent_runs_post`
export const toolDescription = `Create Agent Run`
export const baseUrl = `https://api.example.com`
export const path = `/v1/agent-runs`
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

export const inputParams = z.object({ "body": z.object({ "chat_id": z.string().uuid(), "schedule_id": z.union([z.string().uuid(), z.null()]).optional(), "bundle": z.string(), "toolhouse_id": z.string(), "vars": z.union([z.record(z.string()), z.null()]).optional(), "callback_url": z.union([z.string().url().min(1), z.null()]).optional() }).optional() }).shape