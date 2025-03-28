import { z } from "zod"

export const toolName = `get_all_agent_runs_v1_agent_runs_get`
export const toolDescription = `Get All Agent Runs`
export const baseUrl = `https://api.example.com`
export const path = `/v1/agent-runs`
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