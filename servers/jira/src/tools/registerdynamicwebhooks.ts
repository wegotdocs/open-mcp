import { z } from "zod"

export const toolName = `registerdynamicwebhooks`
export const toolDescription = `Register dynamic webhooks`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/webhook`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "url",
    "webhooks"
  ]
}
export const flatMap = {}

export const inputParams = {
  "url": z.string().describe("The URL that specifies where to send the webhooks. This URL must use the same base URL as the Connect app. Only a single URL per app is allowed to be registered."),
  "webhooks": z.array(z.object({ "events": z.array(z.enum(["jira:issue_created","jira:issue_updated","jira:issue_deleted","comment_created","comment_updated","comment_deleted","issue_property_set","issue_property_deleted"])).describe("The Jira events that trigger the webhook."), "fieldIdsFilter": z.array(z.string().describe("A list of field IDs. When the issue changelog contains any of the fields, the webhook <code>jira:issue_updated</code> is sent. If this parameter is not present, the app is notified about all field updates.")).describe("A list of field IDs. When the issue changelog contains any of the fields, the webhook `jira:issue_updated` is sent. If this parameter is not present, the app is notified about all field updates.").optional(), "issuePropertyKeysFilter": z.array(z.string().describe("A list of issue property keys. A change of those issue properties triggers the <code>issue_property_set</code> or <code>issue_property_deleted</code> webhooks. If this parameter is not present, the app is notified about all issue property updates.")).describe("A list of issue property keys. A change of those issue properties triggers the `issue_property_set` or `issue_property_deleted` webhooks. If this parameter is not present, the app is notified about all issue property updates.").optional(), "jqlFilter": z.string().describe("The JQL filter that specifies which issues the webhook is sent for. Only a subset of JQL can be used. The supported elements are:\n\n *  Fields: `issueKey`, `project`, `issuetype`, `status`, `assignee`, `reporter`, `issue.property`, and `cf[id]`. For custom fields (`cf[id]`), only the epic label custom field is supported.\".\n *  Operators: `=`, `!=`, `IN`, and `NOT IN`.") }).strict().describe("A list of webhooks.")).describe("A list of webhooks.")
}