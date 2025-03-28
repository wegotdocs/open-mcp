import { z } from "zod"

export const toolName = `get_user_agent_runs_me_agent_runs_get`
export const toolDescription = `Get User Agent Runs`
export const baseUrl = `https://api.example.com`
export const path = `/me/agent-runs`
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

export const inputParams = z.object({ "query": z.object({ "next_cursor": z.union([z.string().datetime({ offset: true }), z.null()]).optional(), "limit": z.number().int() }).optional() }).shape