import { z } from "zod"

export const toolName = `getprojectissuesecurityscheme`
export const toolDescription = `Get project issue security scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/project/{projectKeyOrId}/issuesecuritylevelscheme`
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
  "query": [],
  "header": [],
  "path": [
    "projectKeyOrId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "projectKeyOrId": z.string().describe("The project ID or project key (case sensitive).")
}