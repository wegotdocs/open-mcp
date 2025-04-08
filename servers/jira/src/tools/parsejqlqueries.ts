import { z } from "zod"

export const toolName = `parsejqlqueries`
export const toolDescription = `Parse JQL query`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/jql/parse`
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
    "validation"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "queries"
  ]
}
export const flatMap = {}

export const inputParams = {
  "validation": z.enum(["strict","warn","none"]).describe("How to validate the JQL query and treat the validation results. Validation options include:\n\n *  `strict` Returns all errors. If validation fails, the query structure is not returned.\n *  `warn` Returns all errors. If validation fails but the JQL query is correctly formed, the query structure is returned.\n *  `none` No validation is performed. If JQL query is correctly formed, the query structure is returned."),
  "queries": z.array(z.string().min(1)).describe("A list of queries to parse.")
}