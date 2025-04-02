import { z } from "zod"

export const toolName = `getusersfromgroup`
export const toolDescription = `Get users from group`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/group/member`
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
    "groupname",
    "groupId",
    "includeInactiveUsers",
    "startAt",
    "maxResults"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "groupname": z.string().describe("As a group's name can change, use of `groupId` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the `groupId` parameter.").optional(), "groupId": z.string().describe("The ID of the group. This parameter cannot be used with the `groupName` parameter.").optional(), "includeInactiveUsers": z.boolean().describe("Include inactive users."), "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.number().int().describe("The maximum number of items to return per page (number should be between 1 and 50).") }).shape