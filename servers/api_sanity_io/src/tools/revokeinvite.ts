import { z } from "zod"

export const toolName = `revokeinvite`
export const toolDescription = `Revoke invite`
export const baseUrl = `https://api.sanity.io`
export const path = `/vX/access/{resourceType}/{resourceId}/invites/{inviteId}`
export const method = `delete`
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
    "resourceId",
    "inviteId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"), "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."), "inviteId": z.string().describe("The invite's unique identifier.") }).shape