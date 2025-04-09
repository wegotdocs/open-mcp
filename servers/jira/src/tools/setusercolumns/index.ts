export { inputParams } from "./schema/root.js"

export const toolName = `setusercolumns`
export const toolDescription = `Set user default columns`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/user/columns`
export const method = `put`
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
  "query": [
    "accountId"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}