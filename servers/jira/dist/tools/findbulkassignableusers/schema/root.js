import { z } from "zod";
export const inputParams = {
    "query": z.string().describe("A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.").optional(),
    "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
    "accountId": z.string().max(128).describe("A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.").optional(),
    "projectKeys": z.string().describe("A list of project keys (case sensitive). This parameter accepts a comma-separated list."),
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
};
