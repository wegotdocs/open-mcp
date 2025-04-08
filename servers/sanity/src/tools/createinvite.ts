import { z } from "zod"

export const toolName = `createinvite`
export const toolDescription = `Create invite`
export const baseUrl = `https://api.sanity.io`
export const path = `/vX/access/{resourceType}/{resourceId}/invites`
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
  "path": [
    "resourceType",
    "resourceId"
  ],
  "cookie": [],
  "body": [
    "email",
    "role"
  ]
}
export const flatMap = {}

export const inputParams = {
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "email": z.string(),
  "role": z.string()
}