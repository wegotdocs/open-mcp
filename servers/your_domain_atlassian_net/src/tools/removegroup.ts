import { z } from "zod"

export const toolName = `removegroup`
export const toolDescription = `Remove group`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/group`
export const method = `delete`
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

export const inputParams = z.object({ "q_groupname": z.string().optional(), "q_groupId": z.string().describe("The ID of the group. This parameter cannot be used with the `groupname` parameter.").optional(), "q_swapGroup": z.string().describe("As a group's name can change, use of `swapGroupId` is recommended to identify a group.  \nThe group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroupId` parameter.").optional(), "q_swapGroupId": z.string().describe("The ID of the group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroup` parameter.").optional() }).shape