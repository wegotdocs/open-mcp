import { z } from "zod"

export const toolName = `getbulkpermissions`
export const toolDescription = `Get bulk permissions`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/permissions/check`
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
    "accountId",
    "globalPermissions",
    "projectPermissions"
  ]
}
export const flatMap = {}

export const inputParams = {
  "accountId": z.string().describe("The account ID of a user.").optional(),
  "globalPermissions": z.array(z.string()).describe("Global permissions to look up.").optional(),
  "projectPermissions": z.array(z.object({ "issues": z.array(z.number().int()).describe("List of issue IDs.").optional(), "permissions": z.array(z.string()).describe("List of project permissions."), "projects": z.array(z.number().int()).describe("List of project IDs.").optional() }).strict().describe("Details of project permissions and associated issues and projects to look up.")).describe("Project permissions with associated projects and issues to look up.").optional()
}