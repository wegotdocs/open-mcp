import { z } from "zod"

export const toolName = `getgroup`
export const toolDescription = `Get group`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/group`
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
    "expand"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "groupname": z.string().describe("As a group's name can change, use of `groupId` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the `groupId` parameter.").optional(),
  "groupId": z.string().describe("The ID of the group. This parameter cannot be used with the `groupName` parameter.").optional(),
  "expand": z.string().describe("List of fields to expand.").optional()
}