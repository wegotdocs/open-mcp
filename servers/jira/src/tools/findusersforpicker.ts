import { z } from "zod"

export const toolName = `findusersforpicker`
export const toolDescription = `Find users for picker`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/user/picker`
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
export const keys = {
  "query": [
    "query",
    "maxResults",
    "showAvatar",
    "exclude",
    "excludeAccountIds",
    "avatarSize",
    "excludeConnectUsers"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "query": z.string().describe("A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*."),
  "maxResults": z.number().int().describe("The maximum number of items to return. The total number of matched users is returned in `total`.").optional(),
  "showAvatar": z.boolean().describe("Include the URI to the user's avatar.").optional(),
  "exclude": z.array(z.string()).describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "excludeAccountIds": z.array(z.string()).describe("A list of account IDs to exclude from the search results. This parameter accepts a comma-separated list. Multiple account IDs can also be provided using an ampersand-separated list. For example, `excludeAccountIds=5b10a2844c20165700ede21g,5b10a0effa615349cb016cd8&excludeAccountIds=5b10ac8d82e05b22cc7d4ef5`. Cannot be provided with `exclude`.").optional(),
  "avatarSize": z.string().optional(),
  "excludeConnectUsers": z.boolean().optional()
}