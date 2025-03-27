import { z } from "zod"

export const toolName = `createrequest`
export const toolDescription = `Create a new Request`
export const baseUrl = `https://api.sanity.io`
export const path = `/v2024-07-01/access/{resourceType}/{resourceId}/requests`
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

export const inputParams = z.object({ "path": z.object({ "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"), "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type.") }).optional(), "body": z.object({ "note": z.string().optional(), "requestUrl": z.string().describe("Optional URL to redirect the user to after their request has been accepted. Do not include PII or other confidential information.\n").optional(), "requestedRole": z.string().describe("Optional role requested by the user. The approver can assign a different role, but this is just a suggestion. If the role does not exist, the request will still be created and no validation on the role will be done.\n").optional(), "type": z.enum(["access","role"]).describe("The type of request.").optional() }).optional() }).shape