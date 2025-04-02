import { z } from "zod";
export const toolName = `findgroups`;
export const toolDescription = `Find groups`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/groups/picker`;
export const method = `get`;
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
        "accountId",
        "query",
        "exclude",
        "excludeId",
        "maxResults",
        "caseInsensitive",
        "userName"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "accountId": z.string().describe("This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](#api-rest-api-3-user-groups-get).").optional(), "query": z.string().describe("The string to find in group names.").optional(), "exclude": z.array(z.string()).describe("As a group's name can change, use of `excludeGroupIds` is recommended to identify a group.  \nA group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `exclude=group1&exclude=group2`. This parameter cannot be used with the `excludeGroupIds` parameter.").optional(), "excludeId": z.array(z.string()).describe("A group ID to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `excludeId=group1-id&excludeId=group2-id`. This parameter cannot be used with the `excludeGroups` parameter.").optional(), "maxResults": z.number().int().describe("The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property `jira.ajax.autocomplete.limit`.").optional(), "caseInsensitive": z.boolean().describe("Whether the search for groups should be case insensitive."), "userName": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional() }).shape;
