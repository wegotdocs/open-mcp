import { z } from "zod"

export const toolName = `create_run_backoffice_onboarding_runs_post`
export const toolDescription = `Create Run`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/onboarding-runs`
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

export const inputParams = z.object({ "body": z.record(z.any()).optional() }).shape