import { z } from "zod"

export const toolName = `list_audit_logs`
export const toolDescription = `List user actions and configuration changes within this organization.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/audit_logs`
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

export const inputParams = z.object({ "query": z.object({ "effective_at": z.object({ "gt": z.number().int().describe("Return only events whose `effective_at` (Unix seconds) is greater than this value.").optional(), "gte": z.number().int().describe("Return only events whose `effective_at` (Unix seconds) is greater than or equal to this value.").optional(), "lt": z.number().int().describe("Return only events whose `effective_at` (Unix seconds) is less than this value.").optional(), "lte": z.number().int().describe("Return only events whose `effective_at` (Unix seconds) is less than or equal to this value.").optional() }).describe("Return only events whose `effective_at` (Unix seconds) is in this range.").optional(), "project_ids[]": z.array(z.string()).describe("Return only events for these projects.").optional(), "event_types[]": z.array(z.enum(["api_key.created","api_key.updated","api_key.deleted","invite.sent","invite.accepted","invite.deleted","login.succeeded","login.failed","logout.succeeded","logout.failed","organization.updated","project.created","project.updated","project.archived","service_account.created","service_account.updated","service_account.deleted","rate_limit.updated","rate_limit.deleted","user.added","user.updated","user.deleted"]).describe("The event type.")).describe("Return only events with a `type` in one of these values. For example, `project.created`. For all options, see the documentation for the [audit log object](/docs/api-reference/audit-logs/object).").optional(), "actor_ids[]": z.array(z.string()).describe("Return only events performed by these actors. Can be a user ID, a service account ID, or an api key tracking ID.").optional(), "actor_emails[]": z.array(z.string()).describe("Return only events performed by users with these emails.").optional(), "resource_ids[]": z.array(z.string()).describe("Return only events performed on these targets. For example, a project ID updated.").optional(), "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n"), "after": z.string().describe("A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(), "before": z.string().describe("A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional() }).optional() }).shape