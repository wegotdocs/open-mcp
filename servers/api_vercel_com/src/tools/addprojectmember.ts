import { z } from "zod"

export const toolName = `addprojectmember`
export const toolDescription = `Adds a new member to a project.`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/projects/{idOrName}/members`
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
  "path": [
    "idOrName"
  ],
  "cookie": [],
  "body": [
    "uid",
    "username",
    "email",
    "role"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "idOrName": z.string().describe("The ID or name of the Project."), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "uid": z.string().max(256).describe("The ID of the team member that should be added to this project.").optional(), "username": z.string().max(256).describe("The username of the team member that should be added to this project.").optional(), "email": z.string().email().describe("The email of the team member that should be added to this project.").optional(), "role": z.enum(["ADMIN","PROJECT_DEVELOPER","PROJECT_VIEWER"]).describe("The project role of the member that will be added.") }).shape