import { z } from "zod"

export const toolName = `findusersandgroups`
export const toolDescription = `Find users and groups`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/groupuserpicker`
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
    "fieldId",
    "projectId",
    "issueTypeId",
    "avatarSize",
    "caseInsensitive",
    "excludeConnectAddons"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "query": z.string().describe("The search string."),
  "maxResults": z.number().int().describe("The maximum number of items to return in each list.").optional(),
  "showAvatar": z.boolean().describe("Whether the user avatar should be returned. If an invalid value is provided, the default value is used.").optional(),
  "fieldId": z.string().describe("The custom field ID of the field this request is for.").optional(),
  "projectId": z.array(z.string()).describe("The ID of a project that returned users and groups must have permission to view. To include multiple projects, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`. This parameter is only used when `fieldId` is present.").optional(),
  "issueTypeId": z.array(z.string()).describe("The ID of an issue type that returned users and groups must have permission to view. To include multiple issue types, provide an ampersand-separated list. For example, `issueTypeId=10000&issueTypeId=10001`. Special values, such as `-1` (all standard issue types) and `-2` (all subtask issue types), are supported. This parameter is only used when `fieldId` is present.").optional(),
  "avatarSize": z.enum(["xsmall","xsmall@2x","xsmall@3x","small","small@2x","small@3x","medium","medium@2x","medium@3x","large","large@2x","large@3x","xlarge","xlarge@2x","xlarge@3x","xxlarge","xxlarge@2x","xxlarge@3x","xxxlarge","xxxlarge@2x","xxxlarge@3x"]).describe("The size of the avatar to return. If an invalid value is provided, the default value is used.").optional(),
  "caseInsensitive": z.boolean().describe("Whether the search for groups should be case insensitive.").optional(),
  "excludeConnectAddons": z.boolean().describe("Whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used.").optional()
}