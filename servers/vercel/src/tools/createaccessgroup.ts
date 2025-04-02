import { z } from "zod"

export const toolName = `createaccessgroup`
export const toolDescription = `Creates an access group`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/access-groups`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "name",
    "projects",
    "membersToAdd"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "name": z.string().regex(new RegExp("^[A-z0-9_ -]+$")).max(50).describe("The name of the access group"), "projects": z.array(z.object({ "projectId": z.string().max(256).describe("The ID of the project."), "role": z.enum(["ADMIN","PROJECT_VIEWER","PROJECT_DEVELOPER"]).nullable().describe("The project role that will be added to this Access Group. \\\"null\\\" will remove this project level role.") }).strict()).optional(), "membersToAdd": z.array(z.string()).describe("List of members to add to the access group.").optional() }).shape