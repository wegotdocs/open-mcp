import { z } from "zod"

export const toolName = `matchissues`
export const toolDescription = `Check issues against JQL`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/jql/match`
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
    "issueIds",
    "jqls"
  ]
}
export const flatMap = {}

export const inputParams = {
  "issueIds": z.array(z.number().int().describe("A list of issue IDs.")).describe("A list of issue IDs."),
  "jqls": z.array(z.string().describe("A list of JQL queries.")).describe("A list of JQL queries.")
}