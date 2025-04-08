import { z } from "zod"

export const toolName = `apps_get_logs_active_deployment`
export const toolDescription = `Retrieve Active Deployment Logs`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/components/{component_name}/logs`
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
export const keys = {
  "query": [
    "follow",
    "type",
    "pod_connection_timeout"
  ],
  "header": [],
  "path": [
    "app_id",
    "component_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "app_id": z.string().describe("The app ID"),
  "component_name": z.string().describe("An optional component name. If set, logs will be limited to this component only."),
  "follow": z.boolean().describe("Whether the logs should follow live updates.").optional(),
  "type": z.enum(["UNSPECIFIED","BUILD","DEPLOY","RUN","RUN_RESTARTED"]).describe("The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime"),
  "pod_connection_timeout": z.string().describe("An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`.").optional()
}