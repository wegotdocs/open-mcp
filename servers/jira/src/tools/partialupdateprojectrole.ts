import { z } from "zod"

export const toolName = `partialupdateprojectrole`
export const toolDescription = `Partial update project role`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/role/{id}`
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
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "description",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."), "description": z.string().describe("A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.").optional(), "name": z.string().describe("The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role.").optional() }).shape