import { z } from "zod"

export const toolName = `updateaccessgroupproject`
export const toolDescription = `Update an access group project`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/access-groups/{accessGroupIdOrName}/projects/{projectId}`
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
    "accessGroupIdOrName",
    "projectId"
  ],
  "cookie": [],
  "body": [
    "role"
  ]
}
export const flatMap = {}

export const inputParams = {
  "accessGroupIdOrName": z.string(),
  "projectId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "role": z.enum(["ADMIN","PROJECT_VIEWER","PROJECT_DEVELOPER"]).describe("The project role that will be added to this Access Group.")
}