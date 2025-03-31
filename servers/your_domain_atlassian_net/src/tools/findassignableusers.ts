import { z } from "zod"

export const toolName = `findassignableusers`
export const toolDescription = `Find users assignable to issues`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/user/assignable/search`
export const method = `get`
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

export const inputParams = z.object({ "q_query": z.string().describe("A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `username` or `accountId` is specified.").optional(), "q_sessionId": z.string().describe("The sessionId of this request. SessionId is the same until the assignee is set.").optional(), "q_username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(), "q_accountId": z.string().max(128).describe("A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.").optional(), "q_project": z.string().describe("The project ID or project key (case sensitive). Required, unless `issueKey` or `issueId` is specified.").optional(), "q_issueKey": z.string().describe("The key of the issue. Required, unless `issueId` or `project` is specified.").optional(), "q_issueId": z.string().describe("The ID of the issue. Required, unless `issueKey` or `project` is specified.").optional(), "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.number().int().describe("The maximum number of items to return. This operation may return less than the maximum number of items even if more are available. The operation fetches users up to the maximum and then, from the fetched users, returns only the users that can be assigned to the issue."), "q_actionDescriptorId": z.number().int().describe("The ID of the transition.").optional(), "q_recommend": z.boolean() }).shape