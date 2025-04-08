import { z } from "zod"

export const toolName = `deleteactor`
export const toolDescription = `Delete actors from project role`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/project/{projectIdOrKey}/role/{id}`
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
export const keys = {
  "query": [
    "user",
    "group",
    "groupId"
  ],
  "header": [],
  "path": [
    "projectIdOrKey",
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "user": z.string().describe("The user account ID of the user to remove from the project role.").optional(),
  "group": z.string().describe("The name of the group to remove from the project role. This parameter cannot be used with the `groupId` parameter. As a group's name can change, use of `groupId` is recommended.").optional(),
  "groupId": z.string().describe("The ID of the group to remove from the project role. This parameter cannot be used with the `group` parameter.").optional()
}