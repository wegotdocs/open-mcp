import { z } from "zod"

export const inputParams = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.").optional()
}