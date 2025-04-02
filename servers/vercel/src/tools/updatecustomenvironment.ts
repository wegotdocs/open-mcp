import { z } from "zod"

export const toolName = `updatecustomenvironment`
export const toolDescription = `Update a custom environment`
export const baseUrl = `https://api.vercel.com`
export const path = `/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}`
export const method = `patch`
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
  "path": [
    "idOrName",
    "environmentSlugOrId"
  ],
  "cookie": [],
  "body": [
    "b_slug",
    "description",
    "branchMatcher"
  ]
}
export const flatMap = {
  "b_slug": "slug"
}

export const inputParams = z.object({ "idOrName": z.string().describe("The unique project identifier or the project name"), "environmentSlugOrId": z.string().describe("The unique custom environment identifier within the project"), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "b_slug": z.string().max(32).describe("The slug of the custom environment.").optional(), "description": z.string().max(256).describe("Description of the custom environment. This is optional.").optional(), "branchMatcher": z.object({ "type": z.enum(["equals","startsWith","endsWith"]).describe("Type of matcher. One of \\\"equals\\\", \\\"startsWith\\\", or \\\"endsWith\\\"."), "pattern": z.string().max(100).describe("Git branch name or portion thereof.") }).nullable().describe("How we want to determine a matching branch. This is optional.").optional() }).shape