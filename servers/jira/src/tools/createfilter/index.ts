export { inputParams } from "./schema/root.js"

export const toolName = `createfilter`
export const toolDescription = `Create filter`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/filter`
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
    "expand",
    "overrideSharePermissions"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "approximateLastUsed",
    "description",
    "editPermissions",
    "favourite",
    "favouritedCount",
    "id",
    "jql",
    "name",
    "owner",
    "searchUrl",
    "self",
    "sharePermissions",
    "sharedUsers",
    "subscriptions",
    "viewUrl"
  ]
}
export const flatMap = {}