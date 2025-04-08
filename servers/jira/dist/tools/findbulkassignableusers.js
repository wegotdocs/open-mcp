import { z } from "zod";
export const toolName = `findbulkassignableusers`;
export const toolDescription = `Find users assignable to projects`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/user/assignable/multiProjectSearch`;
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
        "query",
        "username",
        "accountId",
        "projectKeys",
        "startAt",
        "maxResults"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "query": z.string().describe("A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.").optional(),
    "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
    "accountId": z.string().max(128).describe("A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.").optional(),
    "projectKeys": z.string().describe("A list of project keys (case sensitive). This parameter accepts a comma-separated list."),
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
};
