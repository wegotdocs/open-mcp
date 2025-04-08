import { z } from "zod"

export const toolName = `exportarchivedissues`
export const toolDescription = `Export archived issue(s)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issues/archive/export`
export const method = `put`
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
    "archivedBy",
    "archivedDateRange",
    "issueTypes",
    "projects",
    "reporters"
  ]
}
export const flatMap = {}

export const inputParams = {
  "archivedBy": z.array(z.string()).describe("List archived issues archived by a specified account ID.").optional(),
  "archivedDateRange": z.object({ "dateAfter": z.string().describe("List issues archived after a specified date, passed in the YYYY-MM-DD format."), "dateBefore": z.string().describe("List issues archived before a specified date provided in the YYYY-MM-DD format.") }).strict().describe("List issues archived within a specified date range.").optional(),
  "issueTypes": z.array(z.string()).describe("List archived issues with a specified issue type ID.").optional(),
  "projects": z.array(z.string()).describe("List archived issues with a specified project key.").optional(),
  "reporters": z.array(z.string()).describe("List archived issues where the reporter is a specified account ID.").optional()
}