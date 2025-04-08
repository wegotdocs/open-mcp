import { z } from "zod"

export const toolName = `functions_create_trigger`
export const toolDescription = `Create Trigger`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/functions/namespaces/{namespace_id}/triggers`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "namespace_id"
  ],
  "cookie": [],
  "body": [
    "name",
    "function",
    "type",
    "is_enabled",
    "scheduled_details"
  ]
}
export const flatMap = {}

export const inputParams = {
  "namespace_id": z.string().describe("The ID of the namespace to be managed."),
  "name": z.string().describe("The trigger's unique name within the namespace."),
  "function": z.string().describe("Name of function(action) that exists in the given namespace."),
  "type": z.string().describe("One of different type of triggers. Currently only SCHEDULED is supported."),
  "is_enabled": z.boolean().describe("Indicates weather the trigger is paused or unpaused."),
  "scheduled_details": z.object({ "cron": z.string().describe("valid cron expression string which is required for SCHEDULED type triggers."), "body": z.object({ "name": z.string().optional() }).nullable().describe("Optional data to be sent to function while triggering the function.").optional() }).describe("Trigger details for SCHEDULED type, where body is optional.\n")
}