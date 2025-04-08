import { z } from "zod"

export const toolName = `moveversion`
export const toolDescription = `Move version`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/version/{id}/move`
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
    "after",
    "position"
  ]
}
export const flatMap = {}

export const inputParams = {
  "id": z.string().describe("The ID of the version to be moved."),
  "after": z.string().url().describe("The URL (self link) of the version after which to place the moved version. Cannot be used with `position`.").optional(),
  "position": z.enum(["Earlier","Later","First","Last"]).describe("An absolute position in which to place the moved version. Cannot be used with `after`.").optional()
}