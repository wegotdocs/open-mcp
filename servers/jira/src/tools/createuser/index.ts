export { inputParams } from "./schema/root.js"

export const toolName = `createuser`
export const toolDescription = `Create user`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/user`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "applicationKeys",
    "displayName",
    "emailAddress",
    "key",
    "name",
    "password",
    "products",
    "self"
  ]
}
export const flatMap = {}