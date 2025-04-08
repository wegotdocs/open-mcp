import { z } from "zod"

export const toolName = `addusertogroup`
export const toolDescription = `Add user to group`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/group/user`
export const method = `post`
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
    "groupname",
    "groupId"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "accountId",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "groupname": z.string().describe("As a group's name can change, use of `groupId` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the `groupId` parameter.").optional(),
  "groupId": z.string().describe("The ID of the group. This parameter cannot be used with the `groupName` parameter.").optional(),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(),
  "name": z.string().describe("This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional()
}