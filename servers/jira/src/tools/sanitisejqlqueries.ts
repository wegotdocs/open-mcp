import { z } from "zod"

export const toolName = `sanitisejqlqueries`
export const toolDescription = `Sanitize JQL queries`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/jql/sanitize`
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
    "queries"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "queries": z.array(z.object({ "accountId": z.string().max(128).nullable().describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(), "query": z.string().describe("The query to sanitize.") }).strict().describe("The JQL query to sanitize for the account ID. If the account ID is null, sanitizing is performed for an anonymous user.")).describe("The list of JQL queries to sanitize. Must contain unique values. Maximum of 20 queries.") }).shape