import { z } from "zod"

export const inputParams = {
  "applicationKeys": z.array(z.string()).describe("Deprecated, do not use.").optional(),
  "displayName": z.string().describe("This property is no longer available. If the user has an Atlassian account, their display name is not changed. If the user does not have an Atlassian account, they are sent an email asking them set up an account.").optional(),
  "emailAddress": z.string().describe("The email address for the user."),
  "key": z.string().describe("This property is no longer available. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "name": z.string().describe("This property is no longer available. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "password": z.string().describe("This property is no longer available. If the user has an Atlassian account, their password is not changed. If the user does not have an Atlassian account, they are sent an email asking them set up an account.").optional(),
  "products": z.array(z.string()).describe("Products the new user has access to. Valid products are: jira-core, jira-servicedesk, jira-product-discovery, jira-software. To create a user without product access, set this field to be an empty array."),
  "self": z.string().describe("The URL of the user.").readonly().optional()
}