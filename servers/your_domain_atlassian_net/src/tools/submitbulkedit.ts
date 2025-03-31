import { z } from "zod"

export const toolName = `submitbulkedit`
export const toolDescription = `Bulk edit issues`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/bulk/issues/fields`
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

export const inputParams = z.object({ "b_editedFieldsInput": z.string(), "b_selectedActions": z.array(z.string()).describe("List of all the field IDs that are to be bulk edited. Each field ID in this list corresponds to a specific attribute of an issue that is set to be modified in the bulk edit operation. The relevant field ID can be obtained by calling the Bulk Edit Get Fields REST API (documentation available on this page itself)."), "b_selectedIssueIdsOrKeys": z.array(z.string()).describe("List of issue IDs or keys which are to be bulk edited. These IDs or keys can be from different projects and issue types."), "b_sendBulkNotification": z.boolean().nullable().describe("A boolean value that indicates whether to send a bulk change notification when the issues are being edited.\n\nIf `true`, dispatches a bulk notification email to users about the updates.") }).shape