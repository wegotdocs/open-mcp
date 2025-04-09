import { z } from "zod";
export const inputParams = {
    "issueIdOrKey": z.string().describe("The ID or key of the issue to be assigned."),
    "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.").optional(),
    "accountType": z.enum(["atlassian", "app", "customer", "unknown"]).describe("The user account type. Can take the following values:\n\n *  `atlassian` regular Atlassian user account\n *  `app` system account used for Connect applications and OAuth to represent external systems\n *  `customer` Jira Service Desk account representing an external service desk").readonly().optional(),
    "active": z.boolean().describe("Whether the user is active.").readonly().optional(),
    "applicationRoles": z.string().optional(),
    "avatarUrls": z.string().optional(),
    "displayName": z.string().describe("The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.").readonly().optional(),
    "emailAddress": z.string().describe("The email address of the user. Depending on the user’s privacy setting, this may be returned as null.").readonly().optional(),
    "expand": z.string().describe("Expand options that include additional user details in the response.").readonly().optional(),
    "groups": z.string().optional(),
    "key": z.string().describe("This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
    "locale": z.string().describe("The locale of the user. Depending on the user’s privacy setting, this may be returned as null.").readonly().optional(),
    "name": z.string().describe("This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
    "self": z.string().url().describe("The URL of the user.").readonly().optional(),
    "timeZone": z.string().describe("The time zone specified in the user's profile. If the user's time zone is not visible to the current user (due to user's profile setting), or if a time zone has not been set, the instance's default time zone will be returned.").readonly().optional()
};
