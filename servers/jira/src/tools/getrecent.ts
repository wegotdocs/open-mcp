import { z } from "zod"

export const toolName = `getrecent`
export const toolDescription = `Get recent projects`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/project/recent`
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
  "query": [
    "expand",
    "properties"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:\n\n *  `description` Returns the project description.\n *  `projectKeys` Returns all project keys associated with a project.\n *  `lead` Returns information about the project lead.\n *  `issueTypes` Returns all issue types associated with the project.\n *  `url` Returns the URL associated with the project.\n *  `permissions` Returns the permissions associated with the project.\n *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.\n *  `*` Returns the project with all available expand options.").optional(),
  "properties": z.array(z.record(z.never())).describe("EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list. Invalid property names are ignored.").optional()
}