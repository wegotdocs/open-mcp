import { z } from "zod"

export const toolName = `get_user_agent_run_me_agent_runs_run_id_get`
export const toolDescription = `Get User Agent Run`
export const baseUrl = `https://api.example.com`
export const path = `/me/agent-runs/{run_id}`
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

export const inputParams = z.object({ "path": z.object({ "run_id": z.string().uuid() }).optional() }).shape