import { z } from "zod"

export const toolName = `apps_get_logs_aggregate`
export const toolDescription = `Retrieve Aggregate Deployment Logs`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/deployments/{deployment_id}/logs`
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

export const inputParams = z.object({ "path": z.object({ "app_id": z.string().describe("The app ID"), "deployment_id": z.string().describe("The deployment ID") }).optional(), "query": z.object({ "follow": z.boolean().describe("Whether the logs should follow live updates.").optional(), "type": z.enum(["UNSPECIFIED","BUILD","DEPLOY","RUN","RUN_RESTARTED"]).describe("The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime"), "pod_connection_timeout": z.string().describe("An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`.").optional() }).optional() }).shape