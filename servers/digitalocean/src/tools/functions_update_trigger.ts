import { z } from "zod"

export const toolName = `functions_update_trigger`
export const toolDescription = `Update Trigger`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}`
export const method = `put`
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
  "query": [],
  "header": [],
  "path": [
    "namespace_id",
    "trigger_name"
  ],
  "cookie": [],
  "body": [
    "is_enabled",
    "scheduled_details"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "namespace_id": z.string().describe("The ID of the namespace to be managed."), "trigger_name": z.string().describe("The name of the trigger to be managed."), "is_enabled": z.boolean().describe("Indicates weather the trigger is paused or unpaused.").optional(), "scheduled_details": z.object({ "cron": z.string().describe("valid cron expression string which is required for SCHEDULED type triggers."), "body": z.object({ "name": z.string().optional() }).nullable().describe("Optional data to be sent to function while triggering the function.").optional() }).describe("Trigger details for SCHEDULED type, where body is optional.\n").optional() }).shape