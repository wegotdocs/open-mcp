import { z } from "zod"

export const toolName = `assignissue`
export const toolDescription = `Assign issue`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/{issueIdOrKey}/assignee`
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

export const inputParams = z.object({ "p_issueIdOrKey": z.string().describe("The ID or key of the issue to be assigned."), "b_accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.").optional(), "b_accountType": z.enum(["atlassian","app","customer","unknown"]).describe("The user account type. Can take the following values:\n\n *  `atlassian` regular Atlassian user account\n *  `app` system account used for Connect applications and OAuth to represent external systems\n *  `customer` Jira Service Desk account representing an external service desk").readonly().optional(), "b_active": z.boolean().describe("Whether the user is active.").readonly().optional(), "b_applicationRoles": z.string().optional(), "b_avatarUrls": z.string().optional(), "b_displayName": z.string().describe("The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.").readonly().optional(), "b_emailAddress": z.string().describe("The email address of the user. Depending on the user’s privacy setting, this may be returned as null.").readonly().optional(), "b_expand": z.string().describe("Expand options that include additional user details in the response.").readonly().optional(), "b_groups": z.string().optional(), "b_key": z.string().describe("This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(), "b_locale": z.string().describe("The locale of the user. Depending on the user’s privacy setting, this may be returned as null.").readonly().optional(), "b_name": z.string().describe("This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(), "b_self": z.string().url().describe("The URL of the user.").readonly().optional(), "b_timeZone": z.string().describe("The time zone specified in the user's profile. If the user's time zone is not visible to the current user (due to user's profile setting), or if a time zone has not been set, the instance's default time zone will be returned.").readonly().optional() }).shape