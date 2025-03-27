import { z } from "zod"

export const toolName = `createrobot`
export const toolDescription = `Create robot and associated token`
export const baseUrl = `https://api.sanity.io`
export const path = `/vX/access/{resourceType}/{resourceId}/robots`
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

export const inputParams = z.object({ "path": z.object({ "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"), "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type.") }).optional(), "body": z.object({ "label": z.string().describe("A human-readable label for the robot."), "memberships": z.array(z.object({ "addedAt": z.string().datetime({ offset: true }).optional(), "resourceType": z.string(), "resourceId": z.string(), "roleNames": z.array(z.string()), "lastSeenAt": z.string().datetime({ offset: true }).nullable().optional(), "resourceUserId": z.string().nullable().describe("An alternative ID for the user in the resource. Only present for project memberships. That is, a user can be assigned to multiple projects, and each project will have a different resourceUserId to reference the same user.").optional() })) }).optional() }).shape