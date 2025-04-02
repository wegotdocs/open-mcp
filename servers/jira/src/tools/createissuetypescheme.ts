import { z } from "zod"

export const toolName = `createissuetypescheme`
export const toolDescription = `Create issue type scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuetypescheme`
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
    "defaultIssueTypeId",
    "description",
    "issueTypeIds",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "defaultIssueTypeId": z.string().describe("The ID of the default issue type of the issue type scheme. This ID must be included in `issueTypeIds`.").optional(), "description": z.string().describe("The description of the issue type scheme. The maximum length is 4000 characters.").optional(), "issueTypeIds": z.array(z.string()).describe("The list of issue types IDs of the issue type scheme. At least one standard issue type ID is required."), "name": z.string().describe("The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.") }).shape