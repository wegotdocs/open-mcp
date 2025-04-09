import { z } from "zod";
export const inputParams = {
    "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.").optional(),
    "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.").optional(),
    "key": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.").optional(),
    "expand": z.string().describe("Use [expand](#expansion) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `groups` includes all groups and nested groups to which the user belongs.\n *  `applicationRoles` includes details of all the applications to which the user has access.").optional()
};
