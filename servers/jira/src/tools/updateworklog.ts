import { z } from "zod"

export const toolName = `updateworklog`
export const toolDescription = `Update worklog`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/{issueIdOrKey}/worklog/{id}`
export const method = `put`
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
  "query": [
    "notifyUsers",
    "adjustEstimate",
    "newEstimate",
    "expand",
    "overrideEditableFlag"
  ],
  "header": [],
  "path": [
    "issueIdOrKey",
    "id"
  ],
  "cookie": [],
  "body": [
    "author",
    "comment",
    "created",
    "b_id",
    "issueId",
    "properties",
    "self",
    "started",
    "timeSpent",
    "timeSpentSeconds",
    "updateAuthor",
    "updated",
    "visibility"
  ]
}
export const flatMap = {
  "b_id": "id"
}

export const inputParams = {
  "issueIdOrKey": z.string().describe("The ID or key the issue."),
  "id": z.string().describe("The ID of the worklog."),
  "notifyUsers": z.boolean().describe("Whether users watching the issue are notified by email.").optional(),
  "adjustEstimate": z.enum(["new","leave","manual","auto"]).describe("Defines how to update the issue's time estimate, the options are:\n\n *  `new` Sets the estimate to a specific value, defined in `newEstimate`.\n *  `leave` Leaves the estimate unchanged.\n *  `auto` Updates the estimate by the difference between the original and updated value of `timeSpent` or `timeSpentSeconds`.").optional(),
  "newEstimate": z.string().describe("The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties`, which returns worklog properties.").optional(),
  "overrideEditableFlag": z.boolean().describe("Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag.").optional(),
  "author": z.string().optional(),
  "comment": z.any().describe("A comment about the worklog in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/). Optional when creating or updating a worklog.").optional(),
  "created": z.string().datetime({ offset: true }).describe("The datetime on which the worklog was created.").readonly().optional(),
  "b_id": z.string().describe("The ID of the worklog record.").readonly().optional(),
  "issueId": z.string().describe("The ID of the issue this worklog is for.").readonly().optional(),
  "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("Details of properties for the worklog. Optional when creating or updating a worklog.").optional(),
  "self": z.string().url().describe("The URL of the worklog item.").readonly().optional(),
  "started": z.string().datetime({ offset: true }).describe("The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog.").optional(),
  "timeSpent": z.string().describe("The time spent working on the issue as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). Required when creating a worklog if `timeSpentSeconds` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpentSecond` is provided.").optional(),
  "timeSpentSeconds": z.number().int().describe("The time in seconds spent working on the issue. Required when creating a worklog if `timeSpent` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpent` is provided.").optional(),
  "updateAuthor": z.string().optional(),
  "updated": z.string().datetime({ offset: true }).describe("The datetime on which the worklog was last updated.").readonly().optional(),
  "visibility": z.string().optional()
}