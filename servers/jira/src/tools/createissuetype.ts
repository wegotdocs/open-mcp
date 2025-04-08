import { z } from "zod"

export const toolName = `createissuetype`
export const toolDescription = `Create issue type`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuetype`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "description",
    "hierarchyLevel",
    "name",
    "type"
  ]
}
export const flatMap = {}

export const inputParams = {
  "description": z.string().describe("The description of the issue type.").optional(),
  "hierarchyLevel": z.number().int().describe("The hierarchy level of the issue type. Use:\n\n *  `-1` for Subtask.\n *  `0` for Base.\n\nDefaults to `0`.").optional(),
  "name": z.string().describe("The unique name for the issue type. The maximum length is 60 characters."),
  "type": z.enum(["subtask","standard"]).describe("Deprecated. Use `hierarchyLevel` instead. See the [deprecation notice](https://community.developer.atlassian.com/t/deprecation-of-the-epic-link-parent-link-and-other-related-fields-in-rest-apis-and-webhooks/54048) for details.\n\nWhether the issue type is `subtype` or `standard`. Defaults to `standard`.").optional()
}