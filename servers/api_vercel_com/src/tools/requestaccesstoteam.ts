import { z } from "zod"

export const toolName = `requestaccesstoteam`
export const toolDescription = `Request access to a team`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/teams/{teamId}/request`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "joinedFrom"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "joinedFrom": z.object({ "origin": z.enum(["import","teams","github","gitlab","bitbucket","feedback","organization-teams"]).describe("The origin of the request."), "commitId": z.string().describe("The commit sha if the origin is a git provider.").optional(), "repoId": z.string().describe("The ID of the repository for the given Git provider.").optional(), "repoPath": z.string().describe("The path to the repository for the given Git provider.").optional(), "gitUserId": z.string().describe("The ID of the Git account of the user who requests access.").optional(), "gitUserLogin": z.string().describe("The login name for the Git account of the user who requests access.").optional() }).strict() }).shape