import { z } from "zod"

export const toolName = `getinvitebytoken`
export const toolDescription = `Get invite`
export const baseUrl = `https://api.sanity.io`
export const path = `/vX/access/{resourceType}/{resourceId}/invites/token/{inviteToken}`
export const method = `get`
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

export const inputParams = z.object({ "path": z.object({ "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"), "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."), "inviteToken": z.string().describe("The public token for the invite. This token is shared with the invitee.") }).optional() }).shape