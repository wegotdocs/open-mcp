import { z } from "zod";
export const toolName = `editissue`;
export const toolDescription = `Edit issue`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issue/{issueIdOrKey}`;
export const method = `put`;
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
];
export const keys = {
    "query": [
        "notifyUsers",
        "overrideScreenSecurity",
        "overrideEditableFlag",
        "returnIssue",
        "expand"
    ],
    "header": [],
    "path": [
        "issueIdOrKey"
    ],
    "cookie": [],
    "body": [
        "fields",
        "historyMetadata",
        "properties",
        "transition",
        "update"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "issueIdOrKey": z.string().describe("The ID or key of the issue."), "notifyUsers": z.boolean().describe("Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored."), "overrideScreenSecurity": z.boolean().describe("Whether screen security is overridden to enable hidden fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)."), "overrideEditableFlag": z.boolean().describe("Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)."), "returnIssue": z.boolean().describe("Whether the response should contain the issue with fields edited in this request. The returned issue will have the same format as in the [Get issue API](#api-rest-api-3-issue-issueidorkey-get)."), "expand": z.string().describe("The Get issue API expand parameter to use in the response if the `returnIssue` parameter is `true`."), "fields": z.record(z.any()).describe("List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`.").optional(), "historyMetadata": z.string().optional(), "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("Details of issue properties to be add or update.").optional(), "transition": z.string().optional(), "update": z.record(z.array(z.object({ "add": z.any().describe("The value to add to the field.").optional(), "copy": z.any().describe("The field value to copy from another issue.").optional(), "edit": z.any().describe("The value to edit in the field.").optional(), "remove": z.any().describe("The value to removed from the field.").optional(), "set": z.any().describe("The value to set in the field.").optional() }).strict().describe("Details of an operation to perform on a field."))).describe("A Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in `fields`.").optional() }).shape;
