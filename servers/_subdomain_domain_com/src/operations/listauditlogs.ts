import { z } from "zod"

export const toolName = `listauditlogs`
export const toolDescription = `List Audit Logs`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/audit_logs`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "query": z.object({ "filter[source_type]": z.string().describe("Filter audit logs by the source type. For example, user or rule").optional(), "filter[source_id]": z.number().int().describe("Filter audit logs by the source id. Requires `filter[source_type]` to also be set").optional(), "filter[actor_id]": z.number().int().describe("Filter audit logs by the actor id").optional(), "filter[ip_address]": z.string().describe("Filter audit logs by the ip address").optional(), "filter[created_at]": z.string().describe("Filter audit logs by the time of creation. When used, you must specify `filter[created_at]` twice in your request, first with the start time and again with an end time").optional(), "filter[action]": z.string().describe("Filter audit logs by the action").optional(), "sort_by": z.string().describe("Offset pagination only. Sort audit logs. Default is `sort_by=created_at`").optional(), "sort_order": z.string().describe("Offset pagination only. Sort audit logs. Default is `sort_order=desc`").optional(), "sort": z.string().describe("Cursor pagination only. Sort audit logs. Default is `sort=-created_at`").optional() }).optional() }).shape